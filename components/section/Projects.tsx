import Link from "next/link";
import { BackendProjects } from "../ui/BackendProjects";
import { BorderControl } from "../ui/BorderControl";
import { PaddingOuter } from "../ui/PaddingOuter";
import { PaddingInner } from "../ui/PaddingInner";

export const Projects = () => {
  return (
    <section id="projects" className="mt-16">
      <BorderControl borderY>
        <PaddingOuter>
          <BackendProjects />

          <div className="mt-2.5">
            <BorderControl borderFull isRounded>
              <Link
                href={"projects/all"}
                className="flex items-center justify-center lowercase text-gray-50/50 hover:text-gray-50 transition-colors duration-200 ease-linear"
              >
                <PaddingInner>View all projects</PaddingInner>
              </Link>
            </BorderControl>
          </div>
        </PaddingOuter>
      </BorderControl>
    </section>
  );
};
