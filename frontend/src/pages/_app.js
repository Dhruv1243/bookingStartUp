import "../index.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import muiTheme from "../theme/muiTheme";
import { defaultSiteConfig } from "../lib/strapi";

export default function App({ Component, pageProps: { session, siteConfig, ...pageProps } }) {
  const resolvedSiteConfig = siteConfig ?? defaultSiteConfig;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header navItems={resolvedSiteConfig.navItems} />
          <Box
            component="main"
            sx={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <Component {...pageProps} siteConfig={resolvedSiteConfig} />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </SessionProvider>
  );
}
