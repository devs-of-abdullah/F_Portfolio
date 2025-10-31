import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";

export default function ProjectCard({ name, shortDescription, image }) {
  const projectPath = `/projects/${name.toLowerCase().replace(/\s+/g, "-")}`;

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
        image={image}
        alt={name}
        sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          component={Link}
          to={projectPath}
          startIcon={<CodeIcon />}
          sx={{
            color: "text.secondary",
            fontSize: 15,
            border: "2px solid",
            borderRadius: 2,
           
            px: 2,
            "&:hover": {
              transform: "scale(1.05)",
             
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
