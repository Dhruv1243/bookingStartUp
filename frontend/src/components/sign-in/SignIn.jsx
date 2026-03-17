import * as React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
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

import ForgotPassword from "./ForgotPassword";
import { GoogleIcon } from "./CustomIcons";

export default function SignIn() {
  const router = useRouter();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [formError, setFormError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validateInputs = (email, password) => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!validateInputs(email, password)) {
      return;
    }

    setIsSubmitting(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });
    setIsSubmitting(false);

    if (result?.error) {
      setFormError("Invalid email or password.");
      return;
    }

    await router.push(result?.url ?? "/");
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
            Sign in to your{" "}
            <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>
              Appoint.It
            </Box>{" "}
            account
          </Typography>

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
            {formError ? <Alert severity="error">{formError}</Alert> : null}

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? "error" : "primary"}
                sx={{ mt: 1 }}
              />
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "text.secondary" }}>Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="********"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? "error" : "primary"}
                sx={{ mt: 1 }}
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={<Box component="span" sx={{ color: "text.secondary" }}>Remember me</Box>}
              sx={{ userSelect: "none" }}
            />

            <ForgotPassword open={open} handleClose={handleClose} />

            <Button type="submit" fullWidth variant="contained" sx={{ fontWeight: 700 }} disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>

            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              underline="none"
              sx={{
                alignSelf: "center",
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
            >
              Forgot your password?
            </Link>
          </Box>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Button fullWidth variant="outlined" disabled startIcon={<GoogleIcon />} sx={{ fontWeight: 700 }}>
              Google sign-in not configured
            </Button>
            <Typography sx={{ textAlign: "center", color: "text.secondary", mt: 1 }}>
              Don&apos;t have an account?{" "}
              <Link component={NextLink} href="/signup" underline="none" sx={{ color: "text.primary", fontWeight: 700, "&:hover": { color: "text.primary" } }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
