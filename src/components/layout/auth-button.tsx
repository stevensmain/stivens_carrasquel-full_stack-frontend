import { ArrowRight } from "lucide-react";

import { auth, signIn, signOut } from "@auth";

const AuthButton = async () => {
  const session = await auth();

  if (session) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "http://localhost:3000/login" });
        }}
      >
        <button
          className="text-foreground hover:text-foreground/80"
          type="submit"
        >
          Cerrar sesión
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", { redirectTo: "http://localhost:3000/" });
      }}
    >
      <button
        className="mt-9 md:mt-24 flex items-center justify-start gap-2 text-foreground text-base font-medium hover:underline"
        type="submit"
      >
        Log in con Spotify <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

export default AuthButton;
