import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { ChatContainerProps } from "../types";
import { ChatContainer } from "./Containers";

const ChatMessageSkeleton = () => (
  <div className="skeleton-message">
    <Skeleton height={20} width={100} />
    <Skeleton height={40} width={200} />
  </div>
);

const ChatContainerSkeleton = () => (
  <div className="message-container">
    {[1, 2, 3].map((index) => (
      <ChatMessageSkeleton key={index} />
    ))}
    <div className="skeleton-message-input">
      <Skeleton height={40} width={300} />
    </div>
    <Link to="/" className="btn skeleton-btn">
      Back
    </Link>
  </div>
);

const MessageInputSkeleton = () => (
  <div className="skeleton-message-input">
    <Skeleton height={40} width={300} />
  </div>
);

export const ChatContainerWithSkeleton = (props: ChatContainerProps) => {
  const { messages, userId, token, chatId } = props;
  return (
    <>
      {messages.length > 0 ? (
        <ChatContainer
          userId={userId}
          token={token}
          chatId={chatId}
          messages={messages}
        />
      ) : (
        <ChatContainerSkeleton />
      )}
    </>
  );
};

export { ChatContainerSkeleton, ChatMessageSkeleton, MessageInputSkeleton };
