import { PuffLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-gray-950 z-50">
      <PuffLoader color="var(--rsc-primary)" />
    </div>
  );
};
