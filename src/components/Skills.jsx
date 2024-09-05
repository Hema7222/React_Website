
import React from "react";
import HTML5 from "../assets/images/HTML5.png";  // Replace with your own images
import CSS from "../assets/images/CSS.png";
import Bootstrap from "../assets/images/Bootstrap.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import java from "../assets/images/java.jpg";
import nodejs from "../assets/images/nodejs.png";
import expressjs from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.webp";
import postgresql from "../assets/images/postgresql.png";
import vscode from "../assets/images/vscode.jpg";
import eclipse from "../assets/images/eclipse.png";
import postman from "../assets/images/postman.png";

const Skills = () => {
  const frontendSkills = [
    { logo: HTML5, name: "HTML5", level: "Advanced", count: 92 },
    { logo: CSS, name: "CSS3", level: "Advanced", count: 86 },
    { logo: Bootstrap, name: "Bootstrap", level: "Advanced", count: 83 },
    { logo: js, name: "JavaScript", level: "Intermediate", count: 78 },
    { logo: react, name: "React", level: "Intermediate", count: 80 },
  ];

  const backendSkills = [
    { logo: java, name: "Java", level: "Advanced", count: 80 },
    { logo: nodejs, name: "Node.js", level: "Intermediate", count: 72 },
    { logo: expressjs, name: "Express.js", level: "Intermediate", count: 69 },
    { logo: mongodb, name: "MongoDB", level: "Intermediate", count: 75 },
    { logo: postgresql, name: "PostgreSQL", level: "Beginner", count: 55 },
  ];

  const tools = [
    { logo: vscode, name: "VS Code", level: "Advanced", count: 85 },
    { logo: eclipse, name: "Eclipse", level: "Advanced", count: 79 },
    { logo: postman, name: "Postman", level: "Intermediate", count: 75 },
  ];

  const renderSkill = (skill, index) => (
    <div
      key={index}
      className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
    >
      <div
        style={{
          background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
        }}
        className="w-28 h-28 flex items-center justify-center rounded-full"
      >
        <div className="text-6xl w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
          <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
        </div>
      </div>
      <p className="text-xl mt-3">{skill.name}</p>
      <p className="text-lg text-gray-400">{skill.level}</p>
    </div>
  );

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-3xl">Frontend</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {frontendSkills.map(renderSkill)}
        </div>
        <p className="text-gray-400 mt-12 text-3xl">Backend</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {backendSkills.map(renderSkill)}
        </div>
        <p className="text-gray-400 mt-12 text-3xl">Tools</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {tools.map(renderSkill)}
        </div> 
      </div>
    </section>
  );
};

export default Skills;
