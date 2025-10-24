import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
export default function SocialIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        justifyContent: { xs: "center" },
        mt: 2,
      }}
    >
      <IconButton
        component="a"
        href="https://github.com/devs-of-abdullah"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        color="inherit"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/aahmet-abdullah/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://t.me/ahmet_abdullah7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        color="inherit"
      >
        <TelegramIcon />
      </IconButton>
    </Box>
  );
};


