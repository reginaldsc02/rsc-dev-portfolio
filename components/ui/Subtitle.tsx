export const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <h3 className="tracking-wide text-default-opacity-50">
      {subtitle || "Subtitle"}
    </h3>
  );
};
