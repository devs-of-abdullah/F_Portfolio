import DownloadCV from "../Util/DownloadCV";
import SocialIcons from "./SocialIcons";
import HomeAbout from "./HomeAbout";
export default function HomeDescription(){
  return (
    <>
      <div style={{textAlign:"center",marginTop:"20px",marginBottom:"10px"}}>
       <HomeAbout />
      <SocialIcons />
      <DownloadCV />

      </div>
     
    </>
  );
};

