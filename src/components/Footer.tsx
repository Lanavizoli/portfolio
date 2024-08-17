"use client";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const withContactSection = !pathname.match(/^\/contact/);
  return (
    <Stack component="footer" spacing={2}>
      {withContactSection && (
        <>
          <Typography variant="h2">
            Envie d&apos;échanger sur votre projet ?
          </Typography>
          <div>
            <Button>se rencontrer</Button>
          </div>
        </>
      )}
      <Divider />
      <Navigation align="start" />
    </Stack>
  );
}
