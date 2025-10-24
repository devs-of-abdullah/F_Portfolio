import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
export default function HomeAbout(){
    return (<>
    <Typography variant="h4" component="h1" >
        Hi I’m Ahmet Abdullah<Typography variant="h6" color="text.secondary">
        Full-Stack Web Developer || C# || SQL || React
      </Typography>
      <Divider sx={{borderColor:"text.secondary", my:2, width:"60%", borderBottomWidth:3, margin:"20px auto"}}  />
      </Typography>
      
      <Typography variant="body1" sx={{mt:2, width:{xs:"90%", md:"80%"}, margin:"0 auto"}}>
        I am a passionate Full-Stack Web Developer with expertise in C#, SQL, and React. I love creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end development, I enjoy tackling complex challenges and delivering innovative solutions.
      </Typography>
    
    </>
      )
      
    }