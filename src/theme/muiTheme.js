import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FFFFFF",
      contrastText: "#14161B",
    },

    background: {
      default: "#181A1F", // main page
      paper: "#20232A", // cards / dialogs
    },

    text: {
      primary: "#F5F7FA",
      secondary: "#A1A8B3",
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
        body: {
          backgroundColor: "#181A1F",
          color: "#F5F7FA",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#20232A",
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
          color: "#14161B",
          "&:hover": {
            backgroundColor: "#E6E6E6",
          },
        },

        outlinedPrimary: {
          borderColor: "rgba(255,255,255,0.15)",
          color: "#F5F7FA",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.25)",
            backgroundColor: "rgba(255,255,255,0.04)",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#1C1F25",
          borderRadius: 12,

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.16)",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
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

