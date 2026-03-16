import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { signIn } from "next-auth/react";
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
import Alert from "@mui/material/Alert";

import { GoogleIcon } from "../sign-in/CustomIcons";

export default function SignUp() {
  const router = useRouter();
  const [userRole, setUserRole] = React.useState("user");
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    orgDescription: "",
    orgAddress: "",
  });
  const [formError, setFormError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userRole,
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      setIsSubmitting(false);
      setFormError(payload.message || "Unable to create your account.");
      return;
    }

    const signInResult = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
      callbackUrl: "/",
    });

    setIsSubmitting(false);

    if (signInResult?.error) {
      setFormError("Account created, but automatic sign-in failed. Please sign in manually.");
      return;
    }

    await router.push(signInResult?.url ?? "/");
  };

  const inputSx = {
    mt: 1,
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
    },
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100%",
        flex: 1,
        width: "100%",
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
            Create your account
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant={userRole === "user" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleRoleChange("user")}
              sx={{ fontWeight: 700 }}
            >
              Create a user account
            </Button>

            <Button
              fullWidth
              variant={userRole === "owner" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleRoleChange("owner")}
              sx={{ fontWeight: 700 }}
            >
              Create an employer account
            </Button>
          </Stack>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            {formError ? <Alert severity="error">{formError}</Alert> : null}

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Username</FormLabel>
              <TextField name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" fullWidth sx={inputSx} />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Email</FormLabel>
              <TextField name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" fullWidth sx={inputSx} />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Password</FormLabel>
              <TextField name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" fullWidth sx={inputSx} />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Confirm Password</FormLabel>
              <TextField name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" fullWidth sx={inputSx} />
            </FormControl>

            {userRole === "owner" && (
              <Box sx={{ mt: 0.5 }}>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>Organization Name</FormLabel>
                    <TextField name="orgName" value={formData.orgName} onChange={handleChange} placeholder="Organization Name" fullWidth sx={inputSx} />
                  </FormControl>

                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>Organization Description</FormLabel>
                    <TextField name="orgDescription" value={formData.orgDescription} onChange={handleChange} placeholder="Brief description of your organization" fullWidth multiline minRows={3} sx={inputSx} />
                  </FormControl>

                  <FormControl>
                    <FormLabel sx={{ color: "text.secondary" }}>Organization Address</FormLabel>
                    <TextField name="orgAddress" value={formData.orgAddress} onChange={handleChange} placeholder="Street address" fullWidth sx={inputSx} />
                  </FormControl>
                </Box>
              </Box>
            )}

            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label={<Box component="span" sx={{ color: "text.secondary" }}>Remember me</Box>}
              sx={{ userSelect: "none" }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ fontWeight: 700 }} disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Button fullWidth variant="outlined" color="primary" disabled startIcon={<GoogleIcon />} sx={{ fontWeight: 700 }}>
              Google sign-up not configured
            </Button>
            <Typography sx={{ textAlign: "center", color: "text.secondary", mt: 1 }}>
              Already have an account?{" "}
              <Link component={NextLink} href="/signin" underline="none" sx={{ color: "text.primary", fontWeight: 700, "&:hover": { color: "text.primary" } }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
