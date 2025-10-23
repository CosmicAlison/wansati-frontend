"use client"

import HomeClient from "@/components/dashboard/home/HomeClient";
import { useUserStore } from "@/store/useUserStore";
  

export default function DashboardHome() {
  const user = useUserStore((state) => state.user);
  return <HomeClient user={user||undefined} />;
}
