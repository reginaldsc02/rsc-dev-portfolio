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
      <div className="mb-2.5"></div>
      <Subtitle subtitle={subtitle} />
      <div className="mb-5"></div>
    </>
  );
};
