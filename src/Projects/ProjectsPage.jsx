import ProjectCard from "./ProjectCard";
import "./ProjectsPage.css";

export const projects = [
  {
    name: "Bank System App",
    shortDescription:
      "Will be published in November 2025 || Made With C#, SQL, React",
    image: "/assets/Soon.png",
    longDescription:
      "A full-stack banking system with user accounts, transactions, and admin panel. Backend built with ASP.NET Core, frontend with React, and database using SQL Server.",
    projectLink: " ",
    liveLink: " ",
    backLink:
      "https://github.com/devs-of-abdullah/Portfolio_Banksystem_Backend",
    frontLink: " ",
  },
  {
    name: "E Commerce App",
    shortDescription:
      "Will be published in December 2025 || Made With C#, SQL, Next.js",
    image: "/assets/Soon.png",
    longDescription:
      "An e-commerce platform with product listings, cart, checkout, and admin dashboard. Backend in ASP.NET Core, frontend in Next.js.",
    projectLink: " ",
    liveLink: " ",
    backLink: " ",
    frontLink: " ",
  },
  {
    name: "Chat App",
    shortDescription:
      "Will be published in January 2026 || Made With C#, SQL, Next.js",
    image: "/assets/Soon.png",
    longDescription:
      "A real-time chat app using SignalR and Next.js with JWT authentication, message persistence, and user management.",
    projectLink: " ",
    liveLink: " ",
    backLink: " ",
    frontLink: " ",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Projects</h3>
      <div className="projects-container">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>

      <h3 style={{ textAlign: "center", marginTop: 30 }}>
        <a
          style={{
            border: "3px solid",
            borderRadius: 20,
            textDecoration: "none",
            color: "inherit",
            padding: 10,
          }}
          href="https://github.com/devs-of-abdullah?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check More
        </a>
      </h3>
    </>
  );
}
