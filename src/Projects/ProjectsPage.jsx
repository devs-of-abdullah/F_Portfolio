import Project from "./Project";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Bank System App",
      description:
        "Will be published in November 2025 || Made With c# Sql React",
      image: "/assets/Soon.png",
      FrontendLink: " ",
      BackendLink:"https://github.com/devs-of-abdullah/Portfolio_Banksystem_Backend",
      liveLink: " ",
    },
    {
      name: "E Commerce App",
      description:
        "Will be published in December 2025 || Made With c# Sql Next JS",
      image: "/assets/Soon.png",
      FrontendLink: " ",
      BackendLink: " ",
      liveLink: " ",
    },
    {
      name: "Chat App",
      description:
        "Will be published in January 2026 || Made With c# Sql Next JS",
      image: "/assets/Soon.png",
      FrontendLink: " ",
      BackendLink: " ",
      liveLink: " ",
    },
  ];

  return (
    <>
      <h3>
        Projects
      </h3>
      <div className="projects-container">
        {projects.map((p, index) => (
          <Project key={index} {...p} />
        ))}
      </div>
      <h3>
        <a style={{border:"5px solid", borderRadius:20,textDecoration:"none",color:"inherit",padding:10 }} href="https://github.com/devs-of-abdullah?tab=repositories">Check More</a>
      </h3>
    </>
  );
}
