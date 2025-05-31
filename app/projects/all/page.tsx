"use client";

import { Button } from "@/components/ui/Button";
import { MainContainer } from "@/components/ui/MainContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ThreeColumnGrid } from "@/components/ui/ThreeColumnGrid";
import { backendProjectsList } from "@/data/backendProjectsList";
import { frontendProjectsList } from "@/data/frontendProjectsList";
import { useState } from "react";

export default function AllProjects() {
  const projectList = [
    {
      category: "frontendProjects",
      project: frontendProjectsList,
    },

    {
      category: "backendProjects",
      project: backendProjectsList,
    },
  ];

  const projectCategories = {
    frontendProjects: "frontendProjects",
    backendProjects: "backendProjects",
  };

  const [projectCategory, setProjectCategory] = useState(
    projectCategories.frontendProjects
  );

  const project =
    projectList.find((project) => project.category === projectCategory)
      ?.project || [];

  return (
    <MainContainer>
      <div className="p-spacing-default-10px border-b-default">
        <div className="gap-spacing-default-10px border-full-default rounded-default-8px">
          <div className="p-spacing-default-10px flex items-center flex-wrap gap-spacing-default-10px">
            <Button
              text={"frontend"}
              isPill
              isPrimary={projectCategory !== projectCategories.frontendProjects}
              onClick={() =>
                setProjectCategory(projectCategories.frontendProjects)
              }
              disabled={projectCategory === projectCategories.frontendProjects}
            />

            <Button
              text={"backend"}
              isPill
              isPrimary={projectCategory !== projectCategories.backendProjects}
              onClick={() =>
                setProjectCategory(projectCategories.backendProjects)
              }
              disabled={projectCategory === projectCategories.backendProjects}
            />
          </div>
        </div>
      </div>

      <div className="p-spacing-default-10px">
        <ThreeColumnGrid>
          {project.map((project) => (
            <div key={project.id}>
              <ProjectCard
                imageSrc={project.imageSrc}
                imageAltText={project.imageAltText}
                title={project.title}
                link={project.link}
                repoName={project.repoName}
                description={project.description}
              />
            </div>
          ))}
        </ThreeColumnGrid>
      </div>
    </MainContainer>
  );
}
