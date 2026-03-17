import * as React from "react";
import NextLink from "next/link";
import { signOut, useSession } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { defaultSiteConfig } from "../../lib/strapi";

export default function Header({ logoSrc, brand = "Appoint.It", navItems = defaultSiteConfig.navItems }) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "divider",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, gap: 3 }}>
          {logoSrc ? (
            <Box
              component="img"
              src={logoSrc}
              alt={`${brand} logo`}
              draggable={false}
              sx={{
                height: 48,
                width: "auto",
                userSelect: "none",
              }}
            />
          ) : (
            <Typography
              component={NextLink}
              href="/"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                color: "inherit",
                flexShrink: 0,
              }}
            >
              {brand}
            </Typography>
          )}

          {isAuthenticated ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 2 },
                  ml: 2,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={NextLink}
                    href="/"
                    color="inherit"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      minWidth: "auto",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              <Box sx={{ ml: "auto" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => signOut({ callbackUrl: "/signin" })}
                  sx={{ fontWeight: 700 }}
                >
                  Logout
                </Button>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
