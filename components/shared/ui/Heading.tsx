export const Heading = ({
  text,
  h1 = false,
}: {
  text: string;
  h1?: boolean;
}) => {
  const Tag: React.HTMLElementType = h1 ? "h1" : "div";
  return <Tag className="text-3xl font-bold text-center">{text}</Tag>;
};
