import Box from "@mui/material/Box";
import Avatar from "./HomeAvatar";
import HomeDescription from "./HomeDescription";
import BlogsPage from "../Blogs/BlogsPage"
import ProjectsPage from "../Projects/ProjectsPage";
import ContactPage from "../Contact/ContactPage"
import SkillsPage from "../Skills/SkillsPage";
export default function HomePage() {
  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          justifyItems: "center",
          
        }}
      >
        <Avatar />
        <div className="HomePageDescription">
          <HomeDescription />
        </div> 
       
      </Box>

   
    </Box>
      
        <SkillsPage/>
        <ProjectsPage/>
    
    </>
  
  );
}
