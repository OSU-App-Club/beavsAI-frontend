import { create } from "zustand";

export interface TokenState {
  token: string;
  setToken: (token: string) => void;
  getToken: () => string;
}

export const useTokenStore = create<TokenState>()((set) => ({
  token: "",
  setToken: (token) => set(() => ({ token })),
  getToken: () => useTokenStore.getState().token,
}));

export interface UserIdState {
  userId: string;
  setUserId: (userId: string) => void;
  getUserId: () => string;
}

export const useUserIdStore = create<UserIdState>((set) => ({
  userId: "",
  setUserId: (userId) => set(() => ({ userId })),
  getUserId: () => useUserIdStore.getState().userId,
}));

export interface ChatIdState {
  chatId: string;
  setChatId: (chatId: string) => void;
  getChatId: () => string;
}

export const useChatIdStore = create<ChatIdState>((set) => ({
  chatId: "",
  setChatId: (chatId) => set(() => ({ chatId })),
  getChatId: () => useChatIdStore.getState().chatId,
}));

