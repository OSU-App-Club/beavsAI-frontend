import { create, StoreApi } from "zustand";

interface TokenState {
  token: string;
  setToken: (token: string) => void;
  getToken: () => string;
}

interface UserIdState {
  userId: string;
  setUserId: (userId: string) => void;
  getUserId: () => string;
}

interface ChatIdState {
  chatId: string;
  setChatId: (chatId: string) => void;
  getChatId: () => string;
}

export type UserStore = StoreApi<UserIdState>;
export type TokenStore = StoreApi<TokenState>;
export type ChatIdStore = StoreApi<ChatIdState>;

export const useTokenStore: TokenStore = create<TokenState>((set) => ({
  token: "",
  setToken: (token) => set(() => ({ token })),
  getToken: () => useTokenStore.getState().token,
}));

export const useUserIdStore: UserStore = create<UserIdState>((set) => ({
  userId: "",
  setUserId: (userId) => set(() => ({ userId })),
  getUserId: () => useUserIdStore.getState().userId,
}));

export const useChatIdStore: ChatIdStore = create<ChatIdState>((set) => ({
  chatId: "",
  setChatId: (chatId) => set(() => ({ chatId })),
  getChatId: () => useChatIdStore.getState().chatId,
}));
