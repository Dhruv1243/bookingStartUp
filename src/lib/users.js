import fs from "node:fs/promises";
import path from "node:path";
import {
  randomBytes,
  randomUUID,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";

const usersFilePath = path.join(process.cwd(), "src", "data", "users.json");

async function ensureUsersFile() {
  try {
    await fs.access(usersFilePath);
  } catch {
    await fs.mkdir(path.dirname(usersFilePath), { recursive: true });
    await fs.writeFile(usersFilePath, "[]\n", "utf8");
  }
}

async function readUsers() {
  await ensureUsersFile();
  const file = await fs.readFile(usersFilePath, "utf8");
  return JSON.parse(file || "[]");
}

async function writeUsers(users) {
  await fs.writeFile(
    usersFilePath,
    `${JSON.stringify(users, null, 2)}\n`,
    "utf8",
  );
}

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, storedHash) {
  if (!storedHash?.includes(":")) {
    return false;
  }

  const [salt, key] = storedHash.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);
  const keyBuffer = Buffer.from(key, "hex");

  if (hashedBuffer.length !== keyBuffer.length) {
    return false;
  }

  return timingSafeEqual(hashedBuffer, keyBuffer);
}

export async function findUserByEmail(email) {
  const users = await readUsers();
  return (
    users.find((user) => user.email.toLowerCase() === email.toLowerCase()) ??
    null
  );
}

export async function createUser({
  username,
  email,
  password,
  userRole,
  orgName,
  orgDescription,
  orgAddress,
  orgNumber,
}) {
  const users = await readUsers();
  const normalizedEmail = email.toLowerCase();

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === normalizedEmail,
  );
  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const user = {
    id: randomUUID(),
    username,
    email: normalizedEmail,
    passwordHash: hashPassword(password),
    userRole,
    orgName: orgName ?? "",
    orgDescription: orgDescription ?? "",
    orgAddress: orgAddress ?? "",
    orgNumber: orgNumber ?? "",
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeUsers(users);

  return user;
}
