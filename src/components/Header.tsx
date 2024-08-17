import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";

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

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography>lanamorena</Typography>
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Stack
            component="ol"
            direction="row"
            spacing={3}
            sx={{ listStyle: "none" }}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
