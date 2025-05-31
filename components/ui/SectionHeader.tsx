import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <Title title={title} />
      <div className="mb-spacing-default-10px"></div>
      <Subtitle subtitle={subtitle} />
      <div className="mb-spacing-default-20px"></div>
    </>
  );
};
