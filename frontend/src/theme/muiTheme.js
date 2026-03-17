import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FFFFFF",
      contrastText: "#0A0A0B",
    },

    background: {
      default: "#0B0B0D",
      paper: "#121316",
    },

    text: {
      primary: "#F5F7FA",
      secondary: "#9AA1AC",
    },

    divider: "rgba(255,255,255,0.10)",
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: '"Manrope", system-ui, sans-serif',

    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },

    button: {
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontWeight: 700,
      textTransform: "none",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: "#0B0B0D",
        },
        body: {
          backgroundColor: "#0B0B0D",
          color: "#F5F7FA",
        },
        '#__next': {
          minHeight: "100vh",
          backgroundColor: "#0B0B0D",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#121316",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
        },

        containedPrimary: {
          backgroundColor: "#FFFFFF",
          color: "#0A0A0B",
          '&:hover': {
            backgroundColor: "#E6E6E6",
          },
        },

        outlinedPrimary: {
          borderColor: "rgba(255,255,255,0.15)",
          color: "#F5F7FA",
          '&:hover': {
            borderColor: "rgba(255,255,255,0.25)",
            backgroundColor: "rgba(255,255,255,0.04)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#101114",
          borderRadius: 12,

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgba(255,255,255,0.16)",
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgba(255,255,255,0.28)",
          },
        },

        notchedOutline: {
          borderColor: "rgba(255,255,255,0.10)",
        },

        input: {
          color: "#F5F7FA",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.10)",
        },
      },
    },
  },
});

export default muiTheme;
