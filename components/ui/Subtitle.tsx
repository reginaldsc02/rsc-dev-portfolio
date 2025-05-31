export const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return <h3 className="text-balance capitalize">{subtitle || "Subtitle"}</h3>;
};
