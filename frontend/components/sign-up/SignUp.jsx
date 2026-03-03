import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import { GoogleIcon, FacebookIcon } from "../sign-in/CustomIcons";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  maxWidth: "450px",
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: theme.shadows[20],
  backgroundColor: theme.palette.background.default
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4)
  },
  background:
    "radial-gradient(900px 520px at 85% -10%, rgba(108, 165, 255, 0.22), transparent 60%)," +
    "radial-gradient(700px 520px at 10% 10%, rgba(125, 231, 210, 0.12), transparent 60%)," +
    theme.palette.background.default
}));

export default function SignUp() {
  const [userRole, setUserRole] = useState("user");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    orgDescription: "",
    orgAddress: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = role => {
    setUserRole(role);

    // clear org fields when switching to "user"
    if (role === "user") {
      setFormData(prev => ({
        ...prev,
        orgName: "",
        orgDescription: "",
        orgAddress: ""
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = { ...formData, userRole };
    console.log(payload);
  };

  return (
    <SignUpContainer direction="column" justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            fontSize: "clamp(1.9rem, 6vw, 2.35rem)",
            textAlign: "center"
          }}
        >
          Create your account to get started!
        </Typography>

        <Stack direction="row" gap={2}>
          <Button
            fullWidth
            variant={userRole === "user" ? "contained" : "outlined"}
            onClick={() => handleRoleChange("user")}
          >
            Join as a user
          </Button>

          <Button
            fullWidth
            variant={userRole === "owner" ? "contained" : "outlined"}
            onClick={() => handleRoleChange("owner")}
          >
            Join as an employer
          </Button>
        </Stack>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
        >
          <FormControl>
            <FormLabel>Username</FormLabel>
            <TextField
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="123@email.com"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <TextField
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Please confirm your password"
            />
          </FormControl>

          {userRole === "owner" && (
            <>
              <FormControl>
                <FormLabel>Organization Name</FormLabel>
                <TextField
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  placeholder="Organization Name"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Organization Description</FormLabel>
                <TextField
                  name="orgDescription"
                  value={formData.orgDescription}
                  onChange={handleChange}
                  placeholder="Please enter a short description"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Organization Address</FormLabel>
                <TextField
                  name="orgAddress"
                  value={formData.orgAddress}
                  onChange={handleChange}
                  placeholder="Please enter a valid address"
                />
              </FormControl>
            </>
          )}

          <FormControlLabel
            control={<Checkbox name="rememberMe" color="primary" />}
            label="Remember me"
          />

          <Button type="submit" variant="contained" fullWidth>
            Create account
          </Button>
        </Box>

        <Divider>or</Divider>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign in with Google")}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign in with Facebook")}
            startIcon={<FacebookIcon />}
          >
            Sign in with Facebook
          </Button>

          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="/signin" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}