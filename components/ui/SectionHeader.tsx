import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const SectionHeader = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <Title icon={icon} title={title} />
      <div className="mb-spacing-default-10px"></div>
      <Subtitle subtitle={subtitle} />
      <div className="mb-spacing-default-20px"></div>
    </>
  );
};
