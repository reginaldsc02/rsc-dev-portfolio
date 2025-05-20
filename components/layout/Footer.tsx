import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-5 py-4 border-t-[1px] border-solid border-t-gray-100/10">
      <div className="p-5 flex items-center justify-between border-[1px] border-solid border-gray-100/10 rounded-lg">
        <p>
          &copy;{" "}
          <Link
            href={"https://github.com/reginaldsc02"}
            target="_blank"
            rel="noreferrer"
            className="underline font-bold hover:text-primary transition-colors duration-200 ease-linear"
          >
            Reginald Sahil Chand
          </Link>{" "}
          - 2025, All Rights Reserved.
        </p>

        <p className="text-gray-50/50">
          Designed & Developed with <span className="text-gray-50">❤️</span> |
          Powered by Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
};
