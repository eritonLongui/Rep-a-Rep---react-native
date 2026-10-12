import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserProfile {
  name: string;
  age: number | null;
  gender: string;
  experienceLevel: "INICIANTE" | "INTERMEDIARIO" | "AVANCADO";
  avatarUrl: string | null;
  selectedBorder: string;
  selectedBackground: string;
  isGuest: boolean;
  repMilestone: string;
  monthlyBuildsUsed: number;
  lastBuildDate: string | null;
}

interface UserState {
  user: UserProfile;
  setGuestMode: (isGuest: boolean) => void;
  updateUser: (fields: Partial<UserProfile>) => void;
  incrementBuildCount: () => boolean; // Returns true if permitted, false if limit reached
  canBuildNewProgram: () => { allowed: boolean; reason?: string };
}

const DEFAULT_USER: UserProfile = {
  name: "Visitante",
  age: null,
  gender: "Outro",
  experienceLevel: "INICIANTE",
  avatarUrl: null,
  selectedBorder: "default",
  selectedBackground: "default",
  isGuest: true,
  repMilestone: "REP 001",
  monthlyBuildsUsed: 1,
  lastBuildDate: new Date().toISOString(),
};

export const useUserStore = create<UserState>((set, get) => ({
  user: DEFAULT_USER,

  setGuestMode: (isGuest) => {
    set((state) => ({
      user: {
        ...state.user,
        isGuest,
        name: isGuest ? "Visitante" : state.user.name || "Atleta Rep",
      },
    }));
  },

  updateUser: (fields) => {
    set((state) => ({
      user: {
        ...state.user,
        ...fields,
      },
    }));
  },

  incrementBuildCount: () => {
    const { user } = get();
    if (user.monthlyBuildsUsed >= 4) {
      return false;
    }
    set((state) => ({
      user: {
        ...state.user,
        monthlyBuildsUsed: state.user.monthlyBuildsUsed + 1,
        lastBuildDate: new Date().toISOString(),
      },
    }));
    return true;
  },

  canBuildNewProgram: () => {
    const { user } = get();
    if (user.monthlyBuildsUsed >= 4) {
      return {
        allowed: false,
        reason: "Você atingiu o limite de 4 montagens mensais do Plano Free.",
      };
    }
    return { allowed: true };
  },
}));
