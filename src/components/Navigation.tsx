import { Box, Link, Stack } from "@mui/material";
import NextLink from "next/link";
import { FC } from "react";

type Link = {
  id: number;
  path: string;
  label: string;
};

const links: Link[] = [
  { id: 0, path: "/home", label: "accueil" },
  { id: 1, path: "/skills", label: "savoir-faire" },
  { id: 2, path: "/projects", label: "projet" },
  { id: 3, path: "/contact", label: "discuter" },
];

interface NavigationProps {
  align?: "start" | "end";
}

export default function Navigation({ align = "end" }: NavigationProps) {
  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: `flex-${align}`,
      }}
    >
      <Stack
        component="ol"
        direction="row"
        spacing={3}
        sx={{ listStyle: "none", margin: 0, padding: 0 }}
      >
        {links.map((link) => (
          <li key={link.id}>
            <NextLink href={link.path} passHref legacyBehavior>
              <Link>{link.label}</Link>
            </NextLink>
          </li>
        ))}
      </Stack>
    </Box>
  );
}
