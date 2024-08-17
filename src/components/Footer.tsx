import { Button, Divider, Typography } from "@mui/material";
import Navigation from "@/components/Navigation";

export default function Footer() {
  return (
    <footer>
      <Typography>Envie d&apos;échanger sur votre projet ?</Typography>
      <Button variant="outlined">se rencontrer</Button>
      <Divider />
      <Navigation align="start" />
    </footer>
  );
}
