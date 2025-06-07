export const Container = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="w-full 2xl:max-w-[1800px] mx-auto p-5 flex flex-col items-center gap-45 animate-fade-in">
      {children}
    </main>
  );
};
