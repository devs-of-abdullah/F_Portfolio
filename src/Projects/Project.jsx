import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Project({
  name,
  description,
  image,
  liveLink,
  BackendLink,
  FrontendLink,
}) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3, borderRadius: 4 }}>
      
      <CardMedia component="img" height="180" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions  style={{display:"flex", justifyContent:"center"  }}>
   
        {FrontendLink && (
          <Button
            size="small"
         
            href={FrontendLink}
            target="_blank"
            rel="noopener noreferrer"
          >
             Frontend
          </Button>
        )}     {liveLink && (
          <Button
            size="small"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            
          >
           Live Demo
          </Button>
        )}
        {BackendLink && (
          <Button
            size="small"
            href={BackendLink}
            target="_blank"
            rel="noopener noreferrer"
          >
             Backend
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
