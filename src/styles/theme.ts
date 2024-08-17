"use client";
import { type ThemeOptions } from "@mui/material/styles";
import localFont from "next/font/local";

const plein = localFont({
  src: [
    {
      path: "../fonts/Plein-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Plein-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const theme: ThemeOptions = {
  typography: {
    fontFamily: plein.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "3em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5em",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.5em",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.5em",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.5em",
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        }),
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        underlineHover: {
          "&:hover": {
            textDecoration: "underline 3px",
            textUnderlineOffset: 7,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          borderWidth: 1,
        }),
      },
    },
  },
};

export default theme;
