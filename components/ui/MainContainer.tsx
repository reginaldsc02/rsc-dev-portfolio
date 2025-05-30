export const MainContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="w-full 2xl:max-w-[1600px] mx-auto mt-16">
      <div className="w-[calc(100%-1rem)] md:w-[calc(100%-5rem)] mx-auto border-x-default">
        {children}
      </div>
    </main>
  );
};
