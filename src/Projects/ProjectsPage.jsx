import ProjectCard from "./ProjectCard";
import "./ProjectsPage.css";

export const projects = [
  {
    name: "Bank System App",
    shortDescription:
      "full-stack bank system & Made With C#, SQL, React",
    image: "/assets/BankSystemAppSS.png",
    longDescription:
      "Abdullah Bank System is a full-stack Bank Management System built with C# .NET API and React + Material UI. It allows users to register, log in, view their balance, transfer money, and manage their accounts. Main features include JWT authentication, real-time balance tracking, money transfer between accounts, user profile management and a fully responsive UI.The frontend is developed with React, Material UI, and deployed on Netlify. The backend uses ASP.NET Core Web API, Entity Framework Core, and SQL Server. Future plans include adding an admin dashboard, card and payment simulations,transactions history and multi-language features.",
    liveLink: "https://abdullahbanksystem.netlify.app/",
    backLink:
      "https://github.com/devs-of-abdullah/Portfolio_Banksystem_Backend",
    frontLink: "https://github.com/devs-of-abdullah/f_bank_system",
  },
  {
    name: "E Commerce App",
    shortDescription:
      "fullstack e commerce|| Made With C#, SQL, react",
    image: "/assets/Soon.png",
    longDescription:"",
    liveLink: " ",
    backLink: " ",
    frontLink: " ",
  },
  {
    name: "Chat App",
    shortDescription:
      "" Made With C#, SQL, Next.js",
    image: "/assets/Soon.png",
    longDescription:
      "A real-time chat app using SignalR and Next.js with JWT authentication, message persistence, and user management.",

    liveLink: " ",
    backLink: "https://github.com/devs-of-abdullah/Portfolio_Chat_Application_Backend",
    frontLink: "https://github.com/devs-of-abdullah/Portfolio-Chat-Application-Frontend",
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
