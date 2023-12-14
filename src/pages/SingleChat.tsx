import { useUser } from "@clerk/clerk-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CourseInfo, Input, MessagesList } from "../components/chat";
import {
  ChatContainerWithSkeleton,
  MessageInputSkeleton,
} from "../components/misc/Skeletons";
import useToken from "../hooks/useToken";
import {
  getAllMessagesForChat,
  getCourseById,
  loadDocument,
} from "../lib/fetchers";
import { useTokenStore } from "../lib/zustand";
import { Message, SenderType } from "../types";

const FETCH_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function SingleChat() {
  const { user } = useUser();
  useToken();
  const userId = user?.id ?? "";
  const token = useTokenStore.getState().token;
  const { chatId } = useParams<{ chatId: string }>();
  const [courseName, setCourseName] = useState<string>("");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getSingleChatMessages", chatId],
    queryFn: () => getAllMessagesForChat(userId, chatId, token),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    select: (data) => {
      const initMessage = {
        question: "",
        answer: `Welcome, ${user.fullName}! Use the chat box below to ask a question about your course, ${courseName}!`,
        userId: "",
        _id: "",
        chatId: "",
        courseId: "",
        senderType: SenderType.AI,
      };
      const ourData = [initMessage, ...data];
      return ourData;
    },
    enabled:
      // yeah, this is a bit of a hack, but we'll modify this later
      userId !== "" &&
      userId !== "undefined" &&
      userId !== undefined &&
      userId !== null,
  });

  const { data: courseInfo } = useQuery({
    queryKey: ["getCourseById", chatId],
    queryFn: () => getCourseById(userId, chatId, token),
    enabled:
      // yeah, this is a bit of a hack, but we'll modify this later
      chatId !== "" &&
      chatId !== "undefined" &&
      chatId !== undefined &&
      chatId !== null &&
      userId !== "" &&
      userId !== "undefined" &&
      userId !== undefined &&
      userId !== null,
  });

  const {
    data: status,
    isStale,
    isLoading: statusLoading,
  } = useQuery({
    staleTime: 1000 * 60 * 60, // 1 hour
    queryKey: ["loadDocument", courseName ?? ""],
    queryFn: () => loadDocument(courseName ?? ""),
    enabled:
      // yeah, this is a bit of a hack, but we'll modify this later
      courseName !== "" &&
      courseName !== "undefined" &&
      courseName !== undefined &&
      courseName !== null,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 1000 * 60 * 15, // 15 minutes
    retry: false,
    retryOnMount: false,
    select: (data) => {
      if (data) {
        JSON.stringify(data);
        const ourData = JSON.parse(JSON.stringify(data));
        return ourData.status;
      }
      return "";
    },
  });
  const handleNewMessage = useCallback(
    (message: Message) => {
      async function postMessage() {
        await axios.post(`${FETCH_URL}/chat/response`, {
          message: message,
          userId: message.userId,
          chatId: message.chatId,
          courseId: message.courseId,
          senderType: message.senderType,
        });
      }
      postMessage()
        .then(() => {
          queryClient.invalidateQueries({
            queryKey: ["getSingleChatMessages", chatId],
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [chatId, queryClient],
  );

  useEffect(() => {
    const message: string = status?.error.toString();
    if (status && status?.error && isStale)
      toast.info(message, {
        toastId: "error",
      });
  }, [status, isStale]);

  useEffect(() => {
    if (courseInfo) {
      setCourseName(courseInfo.courseName);
    }
  }, [courseInfo]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["loadDocument", courseInfo?.courseName],
    });
  }, [courseInfo, queryClient]);

  if (isLoading && !data) {
    return (
      <>
        <div className="flex flex-col md:flex-row h-screen dark:bg-gray-900 bg-slate-200">
          <ChatContainerWithSkeleton
            isLoading={isLoading}
            {...{
              messages: [],
              userId,
              token,
              chatId,
              username: user?.fullName,
            }}
          />
          <MessageInputSkeleton />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex flex-col md:flex-row h-screen dark:bg-gray-900 bg-slate-200">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            {error.message}
          </h1>
        </div>
      </>
    );
  }

  return (
    courseInfo &&
    data && (
      <>
        <div className="flex flex-col h-screen dark:bg-gray-900 bg-slate-200 max-h-screen w-full">
          <div className="flex flex-col flex-grow m-8 p-8 mb-24 mt-12 gap-4 overflow-y-scroll">
            {courseInfo && <CourseInfo chat={courseInfo} />}
            {data && (
              <MessagesList
                userId={user.id}
                messages={data}
                token={token}
                chatId={chatId}
                username={user.fullName}
                isLoading={isLoading}
              />
            )}
            {statusLoading && (
              <div
                className="flex flex-col flex-grow toast toast-center toast-middle alert bg-transparent dark:bg-gray-800 w-1/2 mx-auto translate-y-10 shadow-xl border-sm"
                role="alert"
              >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Checking Indexes for {courseName}...
                </h1>
                <PacmanLoader color={"#DB4405"} />
              </div>
            )}
          </div>
          <div className="fixed bottom-0 w-full">
            <Input
              onAddMessage={handleNewMessage}
              userId={user.id}
              token={token}
              setLoadingEffect={() => {}}
              isLoading={statusLoading}
              courseId={courseInfo.courseId}
              chatId={chatId}
            />
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </>
    )
  );
}
