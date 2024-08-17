import { type PaletteOptions } from "@mui/material";

export const colors = {
  black: "#000001",
  white: "#fff",
};

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: colors.black,
  },
  text: {
    primary: colors.black,
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: colors.white,
  },
  text: {
    primary: colors.white,
  },
};
