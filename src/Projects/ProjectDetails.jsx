import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import { projects } from "./ProjectsPage";
import "./ProjectsPage.css";


export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return (
      <Typography variant="h5" textAlign="center" sx={{ mt: 10 }}>
        Project not found 😢
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      <img
        src={project.image}
        alt={project.name}
        className="details-project-image"
      />
      <Typography variant="h4" sx={{ mt: 3, mb: 2, textAlign: "center" }}>
        {project.name}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 2,
          flexWrap: "no-wrap",
          justifyContent: "center",
        }}
      >
        {project.liveLink && (
          <Button
            variant="outlined"
            href={project.liveLink}
            target="_blank"
            sx={{ fontSize: 10,color:"inherit" }}
            startIcon={<LaunchIcon />}
          >
            Live Demo
          </Button>
        )}
        {project.frontLink && (
          <Button
            variant="outlined"
            href={project.frontLink}
            target="_blank"
            sx={{ fontSize: 10, color:"inherit" }}
            startIcon={<CodeIcon />}
          >
            Frontend
          </Button>
        )}
        {project.backLink && (
          <Button
            variant="outlined"
            href={project.backLink}
            sx={{ fontSize: 10 ,color:"inherit"}}
            target="_blank"
            startIcon={<StorageIcon />}
          >
            Backend
          </Button>
        )}
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
        {project.longDescription}
      </Typography>
    </Box>
  );
}
