export const Paragraph = ({
  paragraph,
  isImportant = false,
}: {
  paragraph: string;
  isImportant?: boolean;
}) => {
  return (
    <p
      className={`tracking-wide ${
        isImportant ? "text-gray-50" : "text-gray-50/50"
      }`}
    >
      {paragraph || "Paragraph"}
    </p>
  );
};
