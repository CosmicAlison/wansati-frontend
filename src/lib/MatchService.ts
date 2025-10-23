"use client";

import { SafeUser, Match } from "@/types/User";
import { useRouter } from "next/navigation";
import { get, post } from "@/lib/Api";

export function useMatchService() {
  const router = useRouter();

  async function getUserMatches(): Promise<SafeUser[]> {
    return get<SafeUser[]>("/matches"); // Adjust depending on backend
  }

  async function getPotentialMatches(): Promise<SafeUser[]> {
    return get<SafeUser[]>("/matches/potential"); // Adjust depending on backend
  }

  async function requestMatch(targetUserId: number): Promise<{ matched: boolean; match?: Match }> {
    return post<{ matched: boolean; match?: Match }>("/swipe", { targetId: targetUserId });
  }

  async function goToMatch(matchId: number, chat = false) {
    const path = chat ? `/dashboard/messages/${matchId}` : `/dashboard/profile/${matchId}`;
    router.push(path);
  }

  return { getUserMatches, requestMatch, goToMatch, getPotentialMatches };
}
