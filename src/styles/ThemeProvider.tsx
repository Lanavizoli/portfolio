"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useTheme from "@/styles/useTheme";
import { type ReactNode } from "react";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const theme = useTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
