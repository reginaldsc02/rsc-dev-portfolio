export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="font-semibold text-balance capitalize text-2xl sm:text-3xl md:text-4xl">
      {title || "Title"}
    </h2>
  );
};
