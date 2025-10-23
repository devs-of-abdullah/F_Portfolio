import Project from "./Project";
import "./ProjectsPage.css";
import Footer from "../Util/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
    {
      name: "Bank System",
      description:
        "Made with C# and SQL .lehrföo4wkjhe5tgöpo3i4w5htr3.kjthö4woe5it",
      image: "/assets/pexels-pixabay-41162.jpg",
      liveLink: "",
      BackendLink: "",
      FrontendLink: "",
    },
  ];

  return (
    <>
    <div
      className="projects-container"
    >
      {projects.map((p, index) => (
        <Project key={index} {...p} />
      ))}

     
    </div>
  
    </>
    


  );
}
