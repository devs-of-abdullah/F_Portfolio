import Box from "@mui/material/Box";
import Avatar from "./HomeAvatar";
import HomeDescription from "./HomeDescription";
import SocialIcons from "./SocialIcons";
import Footer from "../Util/Footer";


export default function HomePage() {
  return (
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
          <SocialIcons />
        </div>
      </Box>

  
   
    </Box>
  );
}
