export const SectionParagraph = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="md:max-w-[90%]">{children}</div>;
};
