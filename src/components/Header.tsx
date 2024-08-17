import { AppBar, Toolbar, Typography } from "@mui/material";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Typography>lanamorena</Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}
