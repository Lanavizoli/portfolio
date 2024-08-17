import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <Stack spacing={8}>
      <Stack direction="row" spacing={4}>
        <Stack flex={1} spacing={2}>
          <Typography variant="h1">On discute ?</Typography>
          <Typography>
            Rencontrons-nous (virtuellement ou à Bordeaux) autour d&apos;un café
            pour voir comment on peut collaborer !
          </Typography>
        </Stack>
        <Stack flex={1} component="form" spacing={2}>
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            name="email"
            placeholder="alice@wonder.land"
            autoComplete="on"
            fullWidth
          />
          <InputLabel>Nom</InputLabel>
          <OutlinedInput
            name="name"
            placeholder="Alice Wonderland"
            fullWidth
            autoComplete="on"
          />
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            placeholder="Coucou, on a besoin de toi !"
            fullWidth
            multiline
            rows={5}
          />
          <div>
            <Button type="submit">Envoyer</Button>
          </div>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
