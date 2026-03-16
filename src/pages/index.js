import { useSession } from "next-auth/react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Index from "../components/landingPage/Index";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Box
        sx={{
          flex: 1,
          bgcolor: "background.default",
          color: "text.primary",
          px: 2,
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              minHeight: 320,
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              bgcolor: "background.paper",
              border: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  fontSize: { xs: "2rem", sm: "2.75rem" },
                }}
              >
                Hello {session.user?.name || session.user?.email || "there"}
              </Typography>
              <Typography sx={{ mt: 1.5, color: "text.secondary" }}>
                This is your home screen.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }

  return <Index />;
}
