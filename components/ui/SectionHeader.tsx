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
      <div className="grid gap-0.5">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </div>
      <div className="mb-spacing-default-20px"></div>
    </>
  );
};
