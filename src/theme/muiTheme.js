import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6ca5ff",
    },
    secondary: {
      main: "#7de7d2",
    },
    background: {
      default: "#0b0f16",
      paper: "#121827",
    },
    text: {
      primary: "#e6edf6",
      secondary: "#a7b2c5",
    },
    divider: "#212a3b",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Archivo", system-ui, sans-serif',
    h1: {
      fontFamily: '"Archivo", system-ui, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Archivo", system-ui, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Archivo", system-ui, sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily: '"DM Sans", system-ui, sans-serif',
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0b0f16",
          color: "#e6edf6",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        containedPrimary: {
          color: "#0b0e14",
          backgroundImage: "linear-gradient(135deg, #6ca5ff, #7de7d2)",
          boxShadow: "0 18px 40px rgba(108, 165, 255, 0.35)",
          "&:hover": {
            boxShadow: "0 20px 44px rgba(108, 165, 255, 0.4)",
          },
        },
        outlinedPrimary: {
          borderColor: "#212a3b",
          color: "#e6edf6",
          "&:hover": {
            borderColor: "#6ca5ff",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "rgba(12, 17, 28, 0.8)",
          fontFamily: '"DM Sans", system-ui, sans-serif',
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(108, 165, 255, 0.6)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6ca5ff",
            boxShadow: "0 0 0 1px rgba(108, 165, 255, 0.35)",
          },
        },
        notchedOutline: {
          borderColor: "#212a3b",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#a7b2c5",
          fontFamily: '"DM Sans", system-ui, sans-serif',
          "&.Mui-focused": {
            color: "#6ca5ff",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#a7b2c5",
          fontFamily: '"DM Sans", system-ui, sans-serif',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#212a3b",
          color: "#a7b2c5",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderColor: "#212a3b",
          backgroundColor: "#121827",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#6ca5ff",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default muiTheme;
