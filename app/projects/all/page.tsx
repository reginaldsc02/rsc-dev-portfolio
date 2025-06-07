"use client";

import { Button } from "@/components/shared/ui/Button";
import { Container } from "@/components/shared/ui/Container";
import { ProjectCard } from "@/components/shared/ui/ProjectCard";
import { backendProjectsList } from "@/components/shared/lib/constants/backendProjectsList";
import { frontendProjectsList } from "@/components/shared/lib/constants/frontendProjectsList";
import { useState } from "react";
import { NotFound } from "@/components/shared/ui/NotFound";

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
    <Container>
      <div className="grid gap-5">
        <div className="w-fit mx-auto p-2.5 flex items-center gap-5 overflow-x-hidden border border-gray-950/10 dark:border-gray-50/10 rounded-full bg-background">
          <Button
            text={"frontend"}
            primary={projectCategory !== projectCategories.frontendProjects}
            onClick={() =>
              setProjectCategory(projectCategories.frontendProjects)
            }
            disabled={projectCategory === projectCategories.frontendProjects}
          />

          <Button
            text={"backend"}
            primary={projectCategory !== projectCategories.backendProjects}
            onClick={() =>
              setProjectCategory(projectCategories.backendProjects)
            }
            disabled={projectCategory === projectCategories.backendProjects}
          />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-5">
          {project && project.length > 0 ? (
            project.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  imageSrc={project.imageSrc}
                  imageAltText={project.imageAltText}
                  title={project.title}
                  href={project.href}
                  description={project.description}
                />
              </div>
            ))
          ) : (
            <NotFound text="Projects not found!" />
          )}
        </div>

        <div className="w-fit mx-auto p-2.5 flex items-center gap-5 overflow-x-hidden border border-gray-50/10 rounded-full bg-background">
          <Button
            text={"frontend"}
            primary={projectCategory !== projectCategories.frontendProjects}
            onClick={() =>
              setProjectCategory(projectCategories.frontendProjects)
            }
            disabled={projectCategory === projectCategories.frontendProjects}
          />

          <Button
            text={"backend"}
            primary={projectCategory !== projectCategories.backendProjects}
            onClick={() =>
              setProjectCategory(projectCategories.backendProjects)
            }
            disabled={projectCategory === projectCategories.backendProjects}
          />
        </div>
      </div>
    </Container>
  );
}
