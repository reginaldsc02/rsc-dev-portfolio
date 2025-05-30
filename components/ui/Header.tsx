import Link from "next/link";

export const Header = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <header className="w-full h-16 px-spacing-default-20px sticky top-0 left-0 flex items-center border-b-default bg-gray-950 z-40">
      <div className="flex gap-spacing-default-10px mr-spacing-default-10px">
        <Link
          href="/"
          className="text-default-opacity-50 transition-colors hover:text-primary"
        >
          @reginaldchand
        </Link>
        |
      </div>

      <div className="w-full flex items-center justify-between">{children}</div>
    </header>
  );
};
