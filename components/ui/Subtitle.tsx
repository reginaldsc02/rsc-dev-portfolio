export const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <h3 className="tracking-wide text-gray-50/50">{subtitle || "Subtitle"}</h3>
  );
};
