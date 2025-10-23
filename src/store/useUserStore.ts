import { create } from "zustand";
import { SafeUser } from "@/types/User";

interface UserStore {
  user: SafeUser | null;
  setUser: (user: SafeUser) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
