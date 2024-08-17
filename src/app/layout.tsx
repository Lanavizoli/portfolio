import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProvider from "@/styles/ThemeProvider";
import { Container } from "@mui/material";
import Header from "@/components/Header";
import { type ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio",
  description: "Lana Morena portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Header />
            <Container component="main" sx={{ paddingTop: 8 }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
