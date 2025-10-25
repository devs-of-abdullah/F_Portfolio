
import Box from "@mui/material/Box";

export default function Avatar() {
  return (
    <Box
      component="img"
      src="\assets\DrawedAbdullahPic.jpg"
      alt="Portfolio Hero"
      sx={{
        width: { xs: "280px", md: "400px", lg: "500px" },
        height: { xs: "280px", md: "400px", lg: "500px" },
        boxShadow: 10,
        borderRadius: "50%",
        objectFit: "cover",
        transition: " transform 0.6s ease-in-out, boxShadow 0.6s ease-in-out",
        border: "5px solid",
        mt: 10,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 15,
        },
      }}
    />
  );
}
