export interface MessageInputProps {
  userId: string;
  token: string;
  setLoadingEffect: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  courseId: string;
  chatId: string;
  onAddMessage: (message: Message) => void;
}

export enum SenderType {
  Human = "User",
  AI = "Bot",
}

export type Message = {
  question: string;
  answer: string;
  userId: string;
  _id?: string;
  senderType: SenderType;
  chatId: string;
  courseId: string;
};

export type ChatContainerProps = {
  messages: Message[];
  userId: string;
  token: string;
  chatId: string;
  username: string;
};

export type Chat = {
  courseId: string;
  createdAt: string;
  messages: Message[];
  updatedAt: string;
  userId: string;
  _id: string;
  courseName: string;
};

export interface ChatMessageProps {
  answer?: string;
  question?: string;
  userId: string;
  _id: string;
  chatId: string;
  token: string;
  username: string;
  index: number;
}

export interface AIMessageProps {
  message: string;
}
