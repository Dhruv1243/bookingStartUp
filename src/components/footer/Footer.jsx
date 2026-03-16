import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        bgcolor: "background.default",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={0.5}
        >
          <Typography variant="body2" color="text.secondary">
            Copyright 2026 AppointIt
          </Typography>

          <Link
            href="mailto:appoint.it.business@gmail.com"
            underline="none"
            color="text.secondary"
            sx={{
              fontSize: "0.9rem",
              "&:hover": { color: "text.primary" },
            }}
          >
            appoint.it.business@gmail.com
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
