import { createUser } from "../../../lib/users";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed." });
  }

  const {
    username,
    email,
    password,
    confirmPassword,
    userRole,
    orgName,
    orgDescription,
    orgAddress,
  } = req.body ?? {};

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All required fields must be filled in." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  if (userRole === "owner" && !orgName?.trim()) {
    return res.status(400).json({ message: "Organization name is required for employer accounts." });
  }

  try {
    const user = await createUser({
      username: username.trim(),
      email: email.trim(),
      password,
      userRole: userRole === "owner" ? "owner" : "user",
      orgName: orgName?.trim(),
      orgDescription: orgDescription?.trim(),
      orgAddress: orgAddress?.trim(),
    });

    return res.status(201).json({
      id: user.id,
      email: user.email,
      username: user.username,
      userRole: user.userRole,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message || "Unable to create account." });
  }
}
