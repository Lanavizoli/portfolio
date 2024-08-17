import { Box, Stack } from "@mui/material";
import { FC } from "react";

type Link = {
  id: number;
  path: string;
  label: string;
};

const links: Link[] = [
  { id: 0, path: "/accueil", label: "accueil" },
  { id: 1, path: "/savoir-faire", label: "savoir-faire" },
  { id: 2, path: "/projet", label: "projet" },
  { id: 3, path: "/discuter", label: "discuter" },
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
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </Stack>
    </Box>
  );
}
