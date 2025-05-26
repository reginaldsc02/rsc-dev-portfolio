import { ReactNode } from "react";
import { BiError } from "react-icons/bi";

export const Title = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <div className="mb-2.5 flex items-center gap-1.5 text-balance capitalize text-4xl font-bold">
      <div className="hidden md:block">{icon || <BiError />}</div>
      <div className="font-medium">{title || "Title"}</div>
    </div>
  );
};
