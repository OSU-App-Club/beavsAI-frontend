import Skeleton from "react-loading-skeleton";
import { PacmanLoader } from "react-spinners";
import { ChatContainerProps } from "../../types";
import { MessagesList } from "../chat";

const ChatMessageSkeleton = () => (
  <div className="skeleton-message">
    <Skeleton height={20} width={100} />
    <Skeleton height={40} width={200} />
  </div>
);

const ChatContainerSkeleton = () => (
  <div className="flex flex-row items-center justify-between flex-grow">
    {[1, 2, 3].map((index) => (
      <ChatMessageSkeleton key={index} />
    ))}
    <div className="skeleton-message-input">
      <Skeleton height={40} width={300} />
    </div>
    <div className="flex flex-col items-center justify-center h-3/6 gap-6 max-w-xl mx-auto">
      <PacmanLoader
        color="rgba(255, 107, 0, 1)"
        cssOverride={{ transform: "translateX(-60%)" }}
        loading
        size={50}
        speedMultiplier={1}
      />
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        Loading Messages...
      </h1>
    </div>
  </div>
);

const MessageInputSkeleton = () => (
  <div className="skeleton-message-input">
    <Skeleton height={40} width={300} />
  </div>
);

export const ChatContainerWithSkeleton = (props: ChatContainerProps) => {
  const { messages, userId, token, chatId, username } = props;
  return (
    <>
      {messages?.length > 0 ? (
        <MessagesList
          username={username}
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
