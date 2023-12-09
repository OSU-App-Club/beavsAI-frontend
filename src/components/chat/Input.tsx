import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { addMessageToChat } from "../../lib/fetchers";
import { Message, MessageInputProps, SenderType } from "../../types";

export default function MessageInput(props: MessageInputProps) {
  const [message, setMessage] = useState<Message>({
    question: "",
    answer: "",
    userId: props.userId,
    _id: "",
    chatId: props.chatId,
    courseId: props.courseId,
    senderType: SenderType.Human,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { chatId } = useParams<{ chatId: string }>();
  const id = chatId ?? "";
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["createMessage", props.userId],
    mutationFn: () =>
    addMessageToChat(props.userId, id, message, props.token, props.courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSingleChatMessages", props.chatId],
      });
      setMessage({
        question: "",
        answer: "",
        userId: props.userId,
        chatId: props.chatId,
        courseId: props.courseId,
        senderType: SenderType.Human,
      });
      setErrorMessage("");
    },
  });

  return (
    <div className="flex flex-row justify-center items-center p-4 gap-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white ">
      <div className="w-full flex gap-4 justify-center items-center -translate-x-32">
        <p style={{ color: "red" }}>{errorMessage}</p>
        <input
          type="text"
          value={message.question}
          disabled={props.isLoading}
          onChange={(e) => setMessage({ ...message, question: e.target.value })}
          placeholder={
            !props.isLoading
              ? "Ask a question about your course..."
              : "You can't send messages until this process is complete."
          }
          className="input input-lg input-bordered  dark:bg-gray-900 w-1/2 bg-slate-200 z-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-gray-900 dark:disabled:text-white dark:disabled:placeholder-white disabled:placeholder-gray-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (message.question === "") {
                setErrorMessage("Message cannot be empty");
                return;
              }
              const body: Message = {
                question: message.question,
                answer: "",
                userId: props.userId,
                chatId: props.chatId,
                courseId: props.courseId,
                senderType: SenderType.Human,
              };
              mutation.mutate();

              props.onAddMessage(body);
            }
          }}
        />
        <button
          onClick={() => {
            if (message.question === "") {
              setErrorMessage("Message cannot be empty");
              return;
            }

            const body: Message = {
              question: message.question,
              answer: "",
              userId: props.userId,
              chatId: props.chatId,
              courseId: props.courseId,
              senderType: SenderType.Human,
            };

            mutation.mutate();

            props.onAddMessage(body);
          }}
          className="btn bg-gray-200 dark:bg-[#db4405] dark:text-white"
        >
          &#10140;
        </button>
      </div>
    </div>
  );
}
