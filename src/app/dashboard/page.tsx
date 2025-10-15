import { auth } from "@/auth";
import HomeClient from "@/components/home/HomeClient";

export default async function DashboardHome() {
    const session = await auth();

  return <HomeClient user={session?.user} />;
}
