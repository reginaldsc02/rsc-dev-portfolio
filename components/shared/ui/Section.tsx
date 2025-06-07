export const Section = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      {children}
    </section>
  );
};
