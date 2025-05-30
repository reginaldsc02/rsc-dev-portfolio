"use client";

import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";
import { MainContainer } from "@/components/ui/MainContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ThreeColumnGrid } from "@/components/ui/ThreeColumnGrid";
import { backendProjectsList } from "@/data/backendProjectsList";
import { frontendProjectsList } from "@/data/frontendProjectsList";
import { useState } from "react";
import { BiDesktop, BiHomeSmile, BiServer } from "react-icons/bi";

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
        <div className="p-spacing-default-10px flex max-[450px]:flex-col items-center md:justify-between gap-spacing-default-10px border-full-default rounded-lg">
          <div className="w-[90%] flex items-center max-[450px]:justify-center flex-wrap gap-spacing-default-10px">
            <Button
              icon={<BiDesktop />}
              text={"frontend"}
              isPill
              isPrimary={projectCategory !== projectCategories.frontendProjects}
              onClick={() =>
                setProjectCategory(projectCategories.frontendProjects)
              }
              disabled={projectCategory === projectCategories.frontendProjects}
            />

            <Button
              icon={<BiServer />}
              text={"backend"}
              isPill
              isPrimary={projectCategory !== projectCategories.backendProjects}
              onClick={() =>
                setProjectCategory(projectCategories.backendProjects)
              }
              disabled={projectCategory === projectCategories.backendProjects}
            />
          </div>

          <LinkButton
            icon={<BiHomeSmile />}
            text="home"
            href="/"
            isPill
            isPrimary={false}
            target="_self"
          />
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
                programmingLanguage={project.programmingLanguage}
                programmingLanguageIcon={project.programmingLanguageIcon}
              />
            </div>
          ))}
        </ThreeColumnGrid>
      </div>
    </MainContainer>
  );
}
