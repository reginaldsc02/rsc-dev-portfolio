export const ThreeColumnGrid = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="grid xl:grid-cols-3 gap-spacing-default-10px">
      {children}
    </div>
  );
};
