export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="font-bold text-balance capitalize text-3xl md:text-4xl">
      {title || "Title"}
    </h2>
  );
};
