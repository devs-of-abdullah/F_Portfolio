import { useLocation } from "react-router-dom";
export default function NotFound(){
    const location = useLocation();

    return (
      <>
        <div  style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
           textAlign: "center", 
           minHeight:"100vh",
           fontSize:"30px"
            
           }}>
          <h3>❌ 404 - Page Not Found</h3>
          <p> there is no page with the link: <br/><br/>
           <b>{location.pathname}</b> </p>
        </div>
      </>
    );
}