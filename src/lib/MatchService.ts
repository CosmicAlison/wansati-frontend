"use client";

import { SafeUser, Match } from "@/types/User";
import { useRouter } from "next/navigation";
import { get, post, put, del } from "@/lib/Api";

export function useMatchService() {
  const router = useRouter();

  // Fetch current user's matches
  async function getUserMatches(): Promise<SafeUser[]> {
    return get<{ matches: SafeUser[] }>("/matches").then(res => res.matches);
  }

  async function getPotentialMatches(): Promise<SafeUser[]> {
    return get<{ matches: SafeUser[] }>("/matches/potential").then(res => res.matches);
  }

  // Send a match request
  async function requestMatch(targetUserId: number): Promise<Match> {
    return post<Match>("/swipe", { targetUserId });
  }

  // Redirect to a match's chat or profile
  async function goToMatch(matchId: number, chat = false) {
    const path = chat ? `/dashboard/messages/${matchId}` : `/dashboard/profile/${matchId}`;
    router.push(path);
  }

  return { getUserMatches, requestMatch, goToMatch, getPotentialMatches };
}
