import { BorderControl } from "./BorderControl";

export const MainContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="w-full 2xl:max-w-[1600px] mx-auto">
      <div className="w-[calc(100%-1rem)] md:w-[calc(100%-5rem)] mx-auto">
        <BorderControl borderX>
          <div className="min-h-screen">{children}</div>
        </BorderControl>
      </div>
    </main>
  );
};
