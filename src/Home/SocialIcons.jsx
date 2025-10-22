import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SocialIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        justifyContent: { xs: "center" },
      }}
    >
      <IconButton
        component="a"
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        color="inherit"
        sx={{ color: "text.primary" }}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        color="inherit"
        sx={{ color: "#0A66C2" }}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        color="inherit"
        sx={{ color: "#1DA1F2" }}
      >
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};


