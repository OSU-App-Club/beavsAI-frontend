import { useUser } from "@clerk/clerk-react";
import { UserResource } from "@clerk/types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ChatContainer } from "../components/Containers";
import Sidebar from "../components/Sidebar";
import {
  ChatContainerSkeleton,
  MessageInputSkeleton,
} from "../components/Skeletons";
import useToken from "../hooks/useToken";
import { getAllMessagesForChat } from "../lib/fetchers";
import { useTokenStore } from "../lib/zustand";
import "../styles/Chat.css";

export const SingleChat = ({ user }: { user: UserResource }) => {
  useToken();
  const { token } = useTokenStore();
  const { chatId } = useParams<{ chatId: string }>();
  const username = user.fullName ?? "";
  const userId = user.id;
  const id = chatId ?? "";
  const [parent] = useAutoAnimate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getSingleChatMessages", chatId],
    queryFn: () => getAllMessagesForChat(userId, id, token),
    retry: false,
    notifyOnChangeProps() {
      return ["data"];
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="page-container">
          <Sidebar token={token} />
          <ChatContainerSkeleton />
          <MessageInputSkeleton />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="page-container">
          <Sidebar token={token} />
          <h1>Error</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page-container" ref={parent}>
        <Sidebar token={token} />
        {!isLoading && (
          <ChatContainer
            userId={user.id}
            messages={data}
            token={token}
            chatId={id}
            username={username}
          />
        )}
      </div>
    </>
  );
};

const Chat = () => {
  useToken();
  const { token } = useTokenStore();
  const { user } = useUser();
  const userId = user?.id ?? "";
  const username = user?.fullName ?? "";

  return (
    token && (
      <>
        <div className="page-container">
          <Sidebar token={token} />
          <ChatContainer
            userId={userId}
            token={token}
            chatId=""
            messages={[]}
            username={username}
          />
        </div>
      </>
    )
  );
};

export default Chat;
