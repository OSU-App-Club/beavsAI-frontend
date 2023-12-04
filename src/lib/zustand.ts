import { create } from "zustand";

interface TokenState {
  token: string;
  setToken: (token: string) => void;
  getToken: () => string;
}

export const useTokenStore = create<TokenState>()((set) => ({
  token: "",
  setToken: (token) => set(() => ({ token })),
  getToken: () => useTokenStore.getState().token,
}));

