import { BackendProjects } from "../ui/BackendProjects";
import { PaddingOuter } from "../ui/PaddingOuter";

export const Projects = () => {
  return (
    <section id="projects" className="mt-16 border-t-default">
      <PaddingOuter>
        <BackendProjects />
      </PaddingOuter>
    </section>
  );
};
