import NextLink from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

export const Index = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        flex: 1,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mx: "auto", maxWidth: 760, textAlign: "center", pt: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2.1rem", sm: "3rem" },
            }}
          >
            Welcome to{" "}
            <Box
              component="span"
              sx={{ color: "text.primary", fontWeight: 800 }}
            >
              Appoint.It
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mt: 2,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.7,
              mx: "auto",
              maxWidth: 640,
            }}
          >
            The easiest way to manage bookings, clients, and schedules, all in
            one place.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              component={NextLink}
              href="/signup"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ maxWidth: { xs: "100%", sm: 180 }, fontWeight: 700 }}
            >
              Join Us
            </Button>

            <Button
              component={NextLink}
              href="/signin"
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              sx={{ maxWidth: { xs: "100%", sm: 180 }, fontWeight: 700 }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>

        <Box id="features" sx={{ mt: 10, pb: 8 }}>
          <Divider />

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            <FeatureCard
              icon={<SearchRoundedIcon fontSize="small" />}
              title="Find more clients"
              desc="Get discovered online and let clients book your services anytime, anywhere without friction."
            />
            <FeatureCard
              icon={<CalendarMonthRoundedIcon fontSize="small" />}
              title="Smart Booking"
              desc="Seamlessly sync with Google Calendar and avoid double bookings automatically."
            />
            <FeatureCard
              icon={<PlaceRoundedIcon fontSize="small" />}
              title="Find nearest services"
              desc="Discover trusted services near you and book instantly based on your location."
            />
          </Box>

          <Stack
            direction="row"
            spacing={3}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: "text.secondary",
        "&:hover": { color: "text.primary" },
      }}
    >
      {children}
    </Link>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Box
            sx={{
              height: 32,
              width: 32,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              bgcolor: "action.hover",
              border: 1,
              borderColor: "divider",
            }}
          >
            {icon}
          </Box>

          <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 1.25,
            color: "text.secondary",
            fontSize: "0.92rem",
            lineHeight: 1.65,
          }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Index;


