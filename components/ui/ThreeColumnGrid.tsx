export const ThreeColumnGrid = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="grid xl:grid-cols-3 gap-2.5">{children}</div>;
};
