import Skill from "./Skill";

export default function SkillsPage() {
  const FrontSkills = [
    "HTML","CSS","Java Script","Type Script","Tailwind","React JS","Next JS","Material UI"
  ];
    const BackSkills = [
      "C#",".Net Core","win Forms","Rest API","Ado.Net","EF Core", "MS SQL ","T SQL","Clean Code","3 Tier Architechure", "Signal R","Solid Principles",
    ];
     const ToolsSkills = [
        "Git","Azure","Netlify","Render","Super Base"
     ];

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: 40,
        }}
      >
        Skills
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          alignContent: "center",
            marginBottom:100, 
        }}
      >
        {FrontSkills.map((skill, index) => (
          <Skill key={index} SkillName={skill} />
        ))}
             {BackSkills.map((skill, index) => (
          <Skill key={index} SkillName={skill} />
        ))}
           {ToolsSkills.map((skill, index) => (
          <Skill key={index} SkillName={skill} />
        ))} 
      </div>
    </>
  );
}
