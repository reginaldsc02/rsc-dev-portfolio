import { BiError } from "react-icons/bi";

export const Title = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-1.5 text-balance capitalize text-4xl font-bold">
      <div className="hidden md:block">{icon || <BiError />}</div>
      <h2 className="font-medium">{title || "Title"}</h2>
    </div>
  );
};
