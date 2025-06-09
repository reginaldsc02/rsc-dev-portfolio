import Link from "next/link";

export const Logo = ({ ...rest }) => {
  return (
    <Link
      href={"/"}
      aria-label="Reginald Chand"
      className="lowercase hover:text-primary transition-colors"
      {...rest}
    >
      @ReginaldChand
    </Link>
  );
};
