type HeadingType = { text: string; h1?: boolean };

export const Heading = ({ text, h1 = false }: HeadingType) => {
  const Tag: React.HTMLElementType = h1 ? "h1" : "div";
  return <Tag className="text-3xl font-bold text-center">{text}</Tag>;
};
