import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";

export default function DownloadCV() {
  return (
    <Button
      variant="outlined"
      color="primary"
      href="/assets/AhmetAbdullahCV.pdf"
      download="AhmetAbdullahCV.pdf"
      startIcon={<DownloadIcon />}
      sx={{
        border: "3px solid",
        borderRadius: 5,
        mt: 3,
        width: 300,
        borderColor: "text.primary",
        color: "text.primary",
      }}
    >
      Download CV
    </Button>
  );
}
