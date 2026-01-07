import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/hydration.png"
                    title="Hydration Essentials – Image Classification"
                    description="Developed a CNN-based image classification system achieving 92% validation accuracy on 1,000+ bottle images. Integrated the model with Flask to provide real-time hydration predictions with response times under 2 seconds."
                />

                <ProjectCard
                    src="/business-planning.png"
                    title="Business Planning Automation Tool"
                    description="Built a full-stack web application during my internship to automate monthly business planning, reducing processing time from 2 weeks to 1 hour. Implemented secure role-based access, Excel/PDF exports, and analytics dashboards using Power BI."
                />
            </div>
        </div>
    );
};

export default Projects;
