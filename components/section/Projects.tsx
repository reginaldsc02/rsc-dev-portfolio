import Link from "next/link";
import { FeaturedProjects } from "../ui/FeaturedProjects";
import { LabeledIcon } from "../ui/LabeledIcon";
import { BiBasket } from "react-icons/bi";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-16 p-spacing-default-10px border-y-default"
    >
      <FeaturedProjects />

      <Link
        href={"projects/all"}
        className="mt-spacing-default-10px flex items-center justify-center lowercase border-full-default rounded-lg text-default-opacity-50 hover:text-default transition-colors duration-200 ease-linear"
      >
        <div className="p-spacing-default-20px">
          <LabeledIcon icon={<BiBasket />} label={"View all projects"} />
        </div>
      </Link>
    </section>
  );
};
