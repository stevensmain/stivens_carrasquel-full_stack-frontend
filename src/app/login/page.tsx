import { Metadata } from "next";

import HeroSection from "@/components/login/hero-section";

export const metadata: Metadata = {
  title: "YouMusic - Inicia sesión",
};

export default function LoginPage() {
  return <HeroSection />;
}
