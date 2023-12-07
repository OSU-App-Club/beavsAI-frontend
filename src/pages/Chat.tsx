import { useUser } from "@clerk/clerk-react";
import { UserResource } from "@clerk/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { MessagesList } from "../components/chat";
import { Selector } from "../components/misc";
import useToken from "../hooks/useToken";
import {
  createChat,
  getAllMessagesForChat,
  getChatIdForCourse,
} from "../lib/fetchers";
import { useTokenStore } from "../lib/zustand";
import { Message } from "../types";

interface WelcomeProps {
  user: UserResource;
  handleSelectCourse: (courseId: string) => void;
}

const WelcomeSection = ({ user, handleSelectCourse }: WelcomeProps) => (
  <div className="flex flex-col items-center justify-center h-3/6 gap-6 max-w-xl mx-auto">
    <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
      Welcome, {user.fullName}!
    </h1>
    <p className="text-lg text-gray-500 dark:text-gray-400">
      Thanks for joining us. Get started by selecting a course to chat with!
    </p>
    <Selector onSelectCourse={handleSelectCourse} />
  </div>
);

interface MessagesList {
  user: UserResource;
  messages: Message[];
  token: string;
  chatId: string;
}

const MessagesListSection = ({
  user,
  messages,
  token,
  chatId,
}: MessagesList) => (
  <MessagesList
    userId={user.id}
    messages={messages}
    token={token}
    chatId={chatId}
    username={user.fullName}
  />
);

const Chat = () => {
  useToken();
  const { token } = useTokenStore();
  const { user } = useUser();
  const [courseId, setCourseId] = useState<string>("");
  const [chatId, setChatId] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const userId: string = user?.id ?? "";
  const { data } = useQuery({
    queryKey: ["getChatIdForCourse", courseId],
    queryFn: () => getChatIdForCourse(userId, courseId, token),
    enabled: courseId !== "",
  });
  const { data: messages, isLoading: messagesLoading } = useQuery({
    queryKey: ["getSingleChatMessages", data?._id],
    queryFn: () => getAllMessagesForChat(userId, data?._id, token),
    enabled:
      // yeah, this is a bit of a hack, but we'll modify this laterw
      data !== undefined &&
      data !== null &&
      data._id !== undefined &&
      data._id !== null &&
      userId !== undefined &&
      userId !== null,
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["createChat", userId],
    mutationFn: () => createChat(userId, token, courseId),
    onSuccess: (e) => {
      queryClient.invalidateQueries({
        queryKey: ["allUserChats", userId],
      });
      setChatId(e._id);
      navigate(`/chat/${e._id}`);
    },
  });
  const handleSelectCourse = useCallback(
    (courseId: string) => {
      setCourseId(courseId);
      mutation.mutate();
    },
    [mutation]
  );

  return (
    user && (
      <div className="flex flex-col md:flex-row h-screen dark:bg-gray-900 bg-slate-200 w-full">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {data && !messagesLoading && (
            <MessagesListSection
              user={user}
              messages={messages}
              token={token}
              chatId={chatId}
            />
          )}
          {data || messages ? null : (
            <WelcomeSection
              user={user}
              handleSelectCourse={handleSelectCourse}
            />
          )}
        </div>
      </div>
    )
  );
};

export default Chat;
