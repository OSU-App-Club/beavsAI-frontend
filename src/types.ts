export interface MessageInputProps {
  userId: string;
  token: string;
  setLoadingEffect: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Message = {
  question: string;
  answer: string;
  userId: string;
  _id: string;
};

export type ChatContainerProps = {
  messages: Message[];
  userId: string;
  token: string;
  chatId: string;
  username: string;
};

export type ChatLink = {
  _id: string;
};

export interface ChatMessageProps {
  answer: string;
  question: string;
  userId: string;
  _id: string;
  chatId: string;
  token: string;
  username: string;
}

export interface AIMessageProps {
  message: string;
}
