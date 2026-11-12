"use client";

import { projectsData } from "../data/mockProjects";
import { CreateProjectCard } from "./CreateProjectCard";
import { ProjectCard } from "./ProjectCard";

const ProjectGrid = () => {
    return (
        <>
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            <CreateProjectCard
                onClickProject={() => { }}
            />
        </>
    )
}

export default ProjectGrid;