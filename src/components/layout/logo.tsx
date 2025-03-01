import { PlayCircle } from "lucide-react";

const Logo = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-wide hidden md:inline-block">
        YouMusic
      </h1>
      <PlayCircle className="w-6 h-6 md:hidden" />
    </>
  );
};

export default Logo;
