import { useSession } from "next-auth/react";
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
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

const featureIcons = [
  SearchRoundedIcon,
  CalendarMonthRoundedIcon,
  PlaceRoundedIcon,
];

export default function LandingPage({ siteConfig, projects }) {
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
                {siteConfig.authenticatedGreeting}
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }

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
            {siteConfig.heroTitle}
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
            {siteConfig.heroSubtitle}
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

        <Box id="features" sx={{ mt: 10, pb: 6 }}>
          <Divider />

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
            }}
          >
            {siteConfig.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? SearchRoundedIcon;

              return (
                <FeatureCard
                  key={`${feature.title}-${index}`}
                  icon={<Icon fontSize="small" />}
                  title={feature.title}
                  desc={feature.description}
                />
              );
            })}
          </Box>
        </Box>

        <Box id="projects" sx={{ pb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, letterSpacing: "-0.02em", mb: 1 }}
          >
            Projects
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            This section is now driven by your Strapi `project` collection.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "1.15rem" }}>
                        {project.title}
                      </Typography>
                      <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
                        {project.summary}
                      </Typography>
                    </Box>
                    {project.featured ? <Chip label="Featured" size="small" /> : null}
                  </Stack>

                  {project.stack.length ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                      {project.stack.map((item) => (
                        <Chip key={`${project.id}-${item}`} label={item} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  ) : null}

                  <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                    {project.projectUrl ? (
                      <Link href={project.projectUrl} target="_blank" rel="noreferrer" underline="none">
                        <Button variant="contained" endIcon={<NorthEastRoundedIcon />}>Live</Button>
                      </Link>
                    ) : null}
                    {project.repositoryUrl ? (
                      <Link href={project.repositoryUrl} target="_blank" rel="noreferrer" underline="none">
                        <Button variant="outlined" endIcon={<NorthEastRoundedIcon />}>Code</Button>
                      </Link>
                    ) : null}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Stack
            direction="row"
            spacing={3}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            {siteConfig.featureLinks.map((label) => (
              <FooterLink key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </FooterLink>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

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
