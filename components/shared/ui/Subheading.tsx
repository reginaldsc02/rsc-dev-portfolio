type SubheadingType = {
  text: string;
};

export const Subheading = ({ text }: SubheadingType) => {
  return <h2 className="text-xl font-semibold text-center">{text}</h2>;
};
