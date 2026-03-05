import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 AppointIt
          </Typography>

          <Link
            href="mailto:appoint.it.business@gmail.com"
            underline="none"
            color="text.secondary"
            sx={{
              "&:hover": { color: "text.primary" },
              fontWeight: 500,
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
