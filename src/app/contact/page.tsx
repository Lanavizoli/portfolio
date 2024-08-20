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
          <InputLabel>Qui êtes vous ?</InputLabel>
          <OutlinedInput
            name="name"
            placeholder="votre prénom et nom"
            autoComplete="on"
            fullWidth
          />
          <InputLabel>Votre adresse mail ?</InputLabel>
          <OutlinedInput
            name="email"
            placeholder="votre.adresse@mail.com"
            fullWidth
            autoComplete="on"
          />
          <InputLabel>Votre message</InputLabel>
          <OutlinedInput
            placeholder="Contenu de votre message"
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
