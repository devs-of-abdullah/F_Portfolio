import Project from "./Project";
import "./ProjectsPage.css";
import Footer from "../Util/Footer";

export default function ProjectsPage() {
  const projects = [
    { name: "Bank System", description: "Made with C# and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "Library Management", description: "Smart system using React and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "NFT University Chain", description: "Blockchain project with NFT diplomas.", image: "/assets/pexels-pixabay-41162.jpg" }, { name: "Bank System", description: "Made with C# and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "Library Management", description: "Smart system using React and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "NFT University Chain", description: "Blockchain project with NFT diplomas.", image: "/assets/pexels-pixabay-41162.jpg" }, { name: "Bank System", description: "Made with C# and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "Library Management", description: "Smart system using React and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "NFT University Chain", description: "Blockchain project with NFT diplomas.", image: "/assets/pexels-pixabay-41162.jpg" }, { name: "Bank System", description: "Made with C# and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
    { name: "Library Management", description: "Smart system using React and SQL.", image: "/assets/pexels-pixabay-41162.jpg" },
  ];

  return (
    <>
      <div className="projects-container">
        {projects.map((p, index) => (
          <Project key={index} {...p} />
        ))}
      </div>

     
    </>
  );
}
