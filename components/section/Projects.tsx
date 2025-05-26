import { BackendProjects } from "../ui/BackendProjects";
import { BorderControl } from "../ui/BorderControl";
import { PaddingOuter } from "../ui/PaddingOuter";

export const Projects = () => {
  return (
    <section id="projects" className="mt-16">
      <BorderControl borderY>
        <PaddingOuter>
          <BackendProjects />
        </PaddingOuter>
      </BorderControl>
    </section>
  );
};
