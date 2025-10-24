import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
export default function HomeAbout(){
    return (
      <>
        <Typography variant="h4" component="h1">
          Hi I’m Ahmet Abdullah
          <Typography variant="h6" color="text.secondary">
            Full-Stack Web Developer || C# || SQL || React
          </Typography>
          <Divider
            sx={{
              borderColor: "text.secondary",
              my: 2,
              width: "60%",
              borderBottomWidth: 3,
              margin: "20px auto",
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2, width: { xs: "90%", md: "80%" }, margin: "0 auto" }}
        >
          I’m a 3rd-year Software Engineering student focused on full-stack
          development and writing clean, well-structured code. With a strong
          programming foundation, I can quickly learn and adapt to new languages
          and technologies. I’m currently open to internship and part-time job
          opportunities to improve my development skills and gain industry experience.
        </Typography>
      </>
    );
      
    }