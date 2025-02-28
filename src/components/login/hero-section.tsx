import { ArrowRight } from "lucide-react";

import { ArrowIcon } from "../ui/icons";
import LoginButton from "./login-button";

const HeroSection = () => {
  return (
    <main className="flex flex-1 items-center justify-center px-12 md:px-20">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-7 md:gap-20">
        <div className="flex justify-center md:justify-start">
          <ArrowIcon className="w-56 h-56 md:w-80 md:h-80 lg:w-[464px] lg:h-[464px] text-lime-400" />
        </div>

        <div className="flex flex-col text-left">
          <h2 className="text-[40px] md:text-[64px] font-bold">
            Disfruta de la <br />
            <span className="text-lime-400">mejor música</span>
          </h2>

          <p className="text-gray-400 mt-7 md:mt-9 text-base max-w-[347px]">
            Accede a tu cuenta para guardar tus álbumes favoritos.
          </p>

          <LoginButton className="mt-9 md:mt-24 flex items-center justify-start gap-2 text-white text-base font-medium hover:underline">
            Log in con Spotify <ArrowRight className="w-5 h-5" />
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
