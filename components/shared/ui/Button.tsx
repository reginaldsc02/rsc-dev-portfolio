export const Button = ({
  text,
  primary = true,
  ...rest
}: {
  text: string;
  primary?: boolean;
} & React.ComponentProps<"button">) => {
  return (
    <button
      className={`p-5 lowercase block rounded-full border text-gray-50 cursor-pointer disabled:pointer-events-none disabled:opacity-50 ${
        primary
          ? "border-transparent bg-primary hover:text-gray-950 dark:hover:text-gray-50 hover:bg-transparent hover:border-primary"
          : "border-primary bg-transparent text-gray-950 dark:text-gray-50 hovder:text-gray-50 hover:bg-primary hover:border-transparent"
      } transition-colors`}
      {...rest}
    >
      {text}
    </button>
  );
};
