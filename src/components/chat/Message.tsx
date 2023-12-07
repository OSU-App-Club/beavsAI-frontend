import { useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../../assets/ai-profile-picture.jpeg";
import g10 from "../../assets/g10.svg";
import "../../assets/profile-logo-image.jpeg";
import { deleteMessage } from "../../lib/fetchers";
import "../../styles/ChatMessage.css";
import { ChatMessageProps } from "../../types";

const ChatMessage = (props: ChatMessageProps) => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const mutation = useMutation({
    mutationKey: ["deleteMessage", props.userId],
    mutationFn: () =>
      deleteMessage(props.userId, props.chatId, props._id, props.token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSingleChatMessages", props.chatId],
      });
    },
  });

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-row items-center w-fit justify-start">
        <div className="flex flex-row items-center w-full justify-start">
          <div className="avatar place-self-start">
            <div className="w-12 h-12 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img
                src={
                  user.hasImage
                    ? user.imageUrl
                    : "../../src/assets/profile-logo-image.jpeg"
                }
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col place-self-start ml-2">
            <h1 className="text-md font-bold ml-3 mr-2 text-black dark:text-white ">
              {props.username}
            </h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400 max-w-sm whitespace-pre-wrap break-words ml-4 h-fit">
              {props.question}
            </h2>
          </div>

          {/* <div className="flex flex-col place-self-start ml-2">
            <h1 className="text-md font-bold ml-3 mr-2 text-black dark:text-white ">
              {props.username}
            </h1>
            <h2 className="text-lg text-gray-500 dark:text-gray-400 max-w-sm whitespace-pre-wrap break-words ml-4 h-fit">
              {props.question}
            </h2>
          </div> */}
        </div>

        <div className="justify-self-end flex flex-row scale-150 ml-4 place-self-start">
          <button
            onClick={() => {
              mutation.mutate();
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &#10006;
          </button>
        </div>
      </div>
    </div>
  );
};

export const AIMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-row items-center w-fit justify-start">
      <div className="flex flex-row items-center w-full justify-start">
        <div className="avatar place-self-start">
          <div className="w-16 mask">
            <img
              src={g10}
              alt="AI Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col place-self-start ml-2">
          <h1 className="text-md font-bold ml-3 mr-2 text-black dark:text-white ">
            BeavsAI
          </h1>
          <h2 className="text-lg text-gray-500 dark:text-gray-400 max-w-sm whitespace-pre-wrap break-words ml-4 h-fit">
            {message}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
