import { auth } from "@auth";
import { redirect } from "next/navigation";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div className="container mx-auto px-8 py-11 text-left md:px-12 md:py-20 md:text-center">
      {children}
    </div>
  );
}
