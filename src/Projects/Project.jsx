import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";
import StorageIcon from "@mui/icons-material/Storage";

export default function Project({
  name,
  description,
  image,
  liveLink,
  BackendLink,
  FrontendLink,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        boxShadow: 3,
        borderRadius: 4,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image || "/assets/default-project.jpg"}
        alt={name}
        sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{ display: "flex", justifyContent: "center", color: "red" }}
      >
        {FrontendLink && (
          <Button
            size="small"
            href={FrontendLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<CodeIcon />}
            sx={{
              color: "text.secondary",
            }}
          >
            Frontend
          </Button>
        )}

        {liveLink && (
          <Button
            size="small"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LaunchIcon />}
            sx={{
              color: "text.secondary",
            }}
          >
            Live
          </Button>
        )}

        {BackendLink && (
          <Button
            size="small"
            href={BackendLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<StorageIcon />}
            sx={{
              color: "text.secondary",
            }}
          >
            Backend
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
