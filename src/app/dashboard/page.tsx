import { auth } from "@/auth";
import HomeClient from "@/components/dashboard/home/HomeClient";
import { NextResponse } from "next/server";

export default async function DashboardHome() {
  const session = await auth();
  return <HomeClient user={session?.user} />;
}
