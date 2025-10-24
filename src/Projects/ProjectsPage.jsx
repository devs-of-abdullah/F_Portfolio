import Project from "./Project";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Bank System App",
      description: "Will be published in November 2025 || Made With c# Sql React",
      image: "/public/assets/Soon.png",
      FrontendLink: " ",
      BackendLink: " ",
      liveLink: " ",
    },
    {
      name: "E Commerce App",
      description: "Will be published in December 2025 || Made With c# Sql Next JS",
      image: "/public/assets/Soon.png",
      FrontendLink: " ",
      BackendLink: " ",
      liveLink: " ",
    },
    {
      name: "E Commerce App",
      description: "Will be published in January 2026 || Made With c# Sql Next JS",
      image: "/public/assets/Soon.png",
      FrontendLink: " ",
      BackendLink: " ",
      liveLink: " ",
    },
  ];

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: 40,
          marginTop: 10,
        }}
      >
        Projects
      </h3>
      <div className="projects-container">
        {projects.map((p, index) => (
          <Project key={index} {...p} />
        ))}
      </div>
    </>
  );
}
