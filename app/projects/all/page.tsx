"use client";

import { BorderControl } from "@/components/ui/BorderControl";
import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";
import { MainContainer } from "@/components/ui/MainContainer";
import { PaddingOuter } from "@/components/ui/PaddingOuter";
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
      <BorderControl borderBottom>
        <PaddingOuter>
          <BorderControl borderFull isRounded>
            <PaddingOuter>
              <div>
                <div className="w-fit max-[580px]:w-full sm:w-full flex max-[580px]:flex-col items-center justify-between gap-5">
                  <div className="w-fit flex flex-col lg:flex-row items-center gap-5">
                    <Button
                      buttonIcon={<BiDesktop />}
                      buttonText={"Frontend Projects"}
                      buttonIsPrimary={false}
                      disabled={
                        projectCategory === projectCategories.frontendProjects
                      }
                      onClick={() =>
                        setProjectCategory(projectCategories.frontendProjects)
                      }
                    />

                    <Button
                      buttonIcon={<BiServer />}
                      buttonText={"Backend Projects"}
                      buttonIsPrimary={false}
                      disabled={
                        projectCategory === projectCategories.backendProjects
                      }
                      onClick={() =>
                        setProjectCategory(projectCategories.backendProjects)
                      }
                    />
                  </div>

                  <LinkButton
                    buttonIcon={<BiHomeSmile />}
                    buttonText={"Go back to home"}
                    buttonHref={"/"}
                    buttonIsPrimary={false}
                    target="_self"
                  />
                </div>
              </div>
            </PaddingOuter>
          </BorderControl>
        </PaddingOuter>
      </BorderControl>

      <PaddingOuter>
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
      </PaddingOuter>
    </MainContainer>
  );
}
