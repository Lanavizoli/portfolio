import { lightPalette, darkPalette } from "@/styles/palette";
import { createTheme, useMediaQuery } from "@mui/material";
import defaultTheme from "@/styles/theme";
import { useMemo } from "react";

export default function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme(defaultTheme, {
        palette: prefersDarkMode ? darkPalette : lightPalette,
      }),
    [prefersDarkMode],
  );
  return theme;
}
