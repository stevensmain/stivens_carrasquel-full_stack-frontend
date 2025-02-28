import Link from "next/link";

import { auth } from "@auth";

import Logo from "./logo";
import NavLink from "./nav-link";
import AuthButton from "./auth-button";

const Header = async () => {
  const session = await auth();

  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-20">
      <Link href="/">
        <Logo />
      </Link>

      {session && (
        <nav className="flex items-center gap-x-6 text-sm">
          <NavLink href="/" label="Buscar" />
          <NavLink href="/albums" label="Mis álbumes" />
          <span className="text-foreground">|</span>
          <AuthButton />
        </nav>
      )}
    </header>
  );
};

export default Header;
