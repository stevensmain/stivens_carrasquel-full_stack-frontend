import { ArrowRight, LogOut } from "lucide-react";

import { auth, signIn, signOut } from "@auth";
import { Button } from "../ui/button";

const AuthButton = async () => {
  const session = await auth();

  if (session) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: process.env.NEXT_PUBLIC_REDIRECT_LOGIN_URL,
          });
        }}
      >
        <Button
          className="hidden md:flex"
          variant="link"
          size="sm"
          type="submit"
        >
          Cerrar sesión
        </Button>
        <Button className="md:hidden" variant="link" size="icon" type="submit">
          <LogOut className="w-6 h-6" />
        </Button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", {
          redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL,
        });
      }}
    >
      <button
        className="mt-9 flex items-center justify-start gap-2 hover:underline md:mt-24"
        type="submit"
      >
        Log in con Spotify <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

export default AuthButton;
