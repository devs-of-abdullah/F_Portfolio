import HomePage from "./Home/HomePage";
import SkillsPage from "./Skills/SkillsPage";
import ContactPage from "./Contact/ContactPage";
import BlogsPage from "./Blogs/BlogsPage";
import Projects from "./Projects/ProjectsPage";
import ToggleMenu from "./Home/ToggleMenu";
import Footer from "./Util/Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Util/NotFound";

function App() {
  return (
    <>
      <ToggleMenu />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Blogs" element={<BlogsPage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
