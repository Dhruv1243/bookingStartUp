import * as React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { GoogleIcon, FacebookIcon } from "../sign-in/CustomIcons";

export default function SignUp() {
  const [userRole, setUserRole] = useState("user");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    orgDescription: "",
    orgAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setUserRole(role);

    if (role === "user") {
      setFormData((prev) => ({
        ...prev,
        orgName: "",
        orgDescription: "",
        orgAddress: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = { ...formData, userRole };
    console.log(payload);
  };

  // No hardcoded colors — let your theme control TextField styling
  const inputSx = {
    mt: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      // uses your theme overrides (MuiOutlinedInput) for bg/border
    },
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        px: 2,
        py: 4,
        bgcolor: "background.default",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: 450,
          bgcolor: "background.paper",
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: "clamp(1.9rem, 6vw, 2.35rem)",
            }}
          >
            Create your account to get started!
          </Typography>

          {/* Role toggle */}
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant={userRole === "user" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleRoleChange("user")}
              sx={{ fontWeight: 700 }}
            >
              Join as a user
            </Button>

            <Button
              fullWidth
              variant={userRole === "owner" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleRoleChange("owner")}
              sx={{ fontWeight: 700 }}
            >
              Join as an employer
            </Button>
          </Stack>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Username</FormLabel>
              <TextField
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                fullWidth
                sx={inputSx}
              />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Email</FormLabel>
              <TextField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="123@email.com"
                fullWidth
                sx={inputSx}
              />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Password</FormLabel>
              <TextField
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                sx={inputSx}
              />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>
                Confirm Password
              </FormLabel>
              <TextField
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Please confirm your password"
                fullWidth
                sx={inputSx}
              />
            </FormControl>

            {/* Employer fields */}
            {userRole === "owner" && (
              <Box sx={{ mt: 0.5 }}>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>
                      Organization Name
                    </FormLabel>
                    <TextField
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleChange}
                      placeholder="Organization Name"
                      fullWidth
                      sx={inputSx}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>
                      Organization Description
                    </FormLabel>
                    <TextField
                      name="orgDescription"
                      value={formData.orgDescription}
                      onChange={handleChange}
                      placeholder="Please enter a short description"
                      fullWidth
                      multiline
                      minRows={3}
                      sx={inputSx}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>
                      Organization Address
                    </FormLabel>
                    <TextField
                      name="orgAddress"
                      value={formData.orgAddress}
                      onChange={handleChange}
                      placeholder="Please enter a valid address"
                      fullWidth
                      sx={inputSx}
                    />
                  </FormControl>
                </Box>
              </Box>
            )}

            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label={
                <Box component="span" sx={{ color: "text.secondary" }}>
                  Remember me
                </Box>
              }
              sx={{ userSelect: "none" }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontWeight: 700 }}
            >
              Create account
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>or</Divider>

          {/* Social + link */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => alert("Sign in with Google")}
              startIcon={<GoogleIcon />}
              sx={{ fontWeight: 700 }}
            >
              Sign in with Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => alert("Sign in with Facebook")}
              startIcon={<FacebookIcon />}
              sx={{ fontWeight: 700 }}
            >
              Sign in with Facebook
            </Button>

            <Typography
              sx={{ textAlign: "center", color: "text.secondary", mt: 1 }}
            >
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/signin"
                underline="none"
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  "&:hover": { color: "text.primary" },
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
