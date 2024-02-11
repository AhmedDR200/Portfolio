import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-7 px-14">
        <ProjectCard
          src="/devlant.png"
          title="DEVLANT E-Commerce APIs"
          description="providing a solid foundation for creating a feature-rich online shopping experience."
        />
        <ProjectCard
          src="/devlant-high-resolution-logo.png"
          title="DEVLANT DevCamper APIs"
          description="Backend APIs for DevCamper application, which is a bootcamp directory website."
        />
        <ProjectCard
          src="/minut-high-resolution-logo.png"
          title="MINUT APIs"
          description="Minut Backend Challenge: The Booking System."
        />
        <ProjectCard
          src="/naturxi.png"
          title="Naturix APIs"
          description="Naturix Web App Community."
        />
        <ProjectCard
          src="/natours-high-resolution-logo.png"
          title="Natours APIs"
          description="Tours Management App."
        />
      </div>
    </div>
  );
};

export default Projects;

