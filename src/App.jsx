import HomePage from "./Home/HomePage";
import ContactPage from "./Contact/ContactPage";
import BlogsPage from "./Blogs/BlogsPage";
import Projects from "./Projects/ProjectsPage";
import ToggleMenu from "./Home/ToggleMenu";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Util/NotFound";

export default function App() {
  return (
    
    <>
   
      <ToggleMenu />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Blogs" element={<BlogsPage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
     
    </>
  );
}


