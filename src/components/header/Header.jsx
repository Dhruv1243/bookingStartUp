/* eslint-disable */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function Header({ logoSrc, brand = "Appoint.It" }) {
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
        <Toolbar disableGutters sx={{ py: 1.5 }}>
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
              }}
            >
              {brand}
            </Typography>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
