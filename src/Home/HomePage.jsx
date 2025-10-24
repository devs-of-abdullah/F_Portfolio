import Box from "@mui/material/Box";
import Avatar from "./HomeAvatar";
import HomeDescription from "./HomeDescription";



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

    </>
  
  );
}
