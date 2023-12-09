import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UseMutationResult } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

import { Chat } from "../../types";

interface ChatListProps {
  data: Chat[];
  mutation: UseMutationResult<void, Error, void, unknown>;
  chatId: string | undefined;
  activeChat: string | null;
  setActiveChat: (id: string) => void;
}

export default function ChatList({
  data,
  mutation,
  chatId,
  activeChat,
  setActiveChat,
}: ChatListProps) {
  const [sidebarAnimation] = useAutoAnimate({
    duration: 200,
  });
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full mx-8 overflow-y-scroll gap-0 p-4"
        ref={sidebarAnimation}
      >
        {data?.map((chat: Chat) => {
          return (
            <div
              className="flex justify-center w-full items-start mt-4"
              key={chat._id}
            >
              <span
                className="before:z-50 before:content-[attr(data-tip)] tooltip tooltip-top"
                data-tip={chat.courseName}
              >
                <NavLink
                  to={`/chat/${chat._id}`}
                  className={` inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-orange-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-offset-2 focus:ring-orange-500 ${
                    chat._id === (activeChat ?? chatId)
                      ? "bg-gradient-to-br from-orange-500 to-orange-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-offset-2 focus:ring-orange-500"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveChat(chat._id);
                  }}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 dark:group-hover:bg-opacity-10 max-w-[230px] truncate">
                    {chat.courseName}
                  </span>
                </NavLink>
              </span>
              <button
                onClick={() => {
                  setActiveChat(chat._id);
                  mutation.mutate();
                }}
                key={chat._id}
                className="btn btn-xs btn-circle cursor-pointer bg-gray-200 dark:bg-white border-none hover:bg-red-400 transition duration-300 text-[#dc4405] font-bold align-middle items-center justify-center self-center mb-3"
              >
                &#10006;
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
