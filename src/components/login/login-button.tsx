import { ButtonHTMLAttributes } from "react";

import { signIn } from "@auth";

type LoginButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

const LoginButton = ({ children, ...props }: LoginButtonProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", { redirectTo: "http://localhost:3000/" });
      }}
    >
      <button {...props} type="submit">
        {children}
      </button>
    </form>
  );
};

export default LoginButton;
