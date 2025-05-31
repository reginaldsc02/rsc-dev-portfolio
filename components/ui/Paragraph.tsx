export const Paragraph = ({
  paragraph,
  isImportant = false,
}: {
  paragraph: string;
  isImportant?: boolean;
}) => {
  return (
    <p
      className={`${isImportant ? "text-default" : "text-default-opacity-50"}`}
    >
      {paragraph || "Paragraph"}
    </p>
  );
};
