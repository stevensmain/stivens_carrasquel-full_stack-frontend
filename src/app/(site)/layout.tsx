import { auth } from "@auth";
import { redirect } from "next/navigation";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/login");

  return <>{children}</>;
}
