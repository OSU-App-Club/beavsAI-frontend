import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../assets/profile-logo-image.jpeg";
import { deleteMessage } from "../lib/fetchers";
import { ChatMessageProps } from "../types";
import "../styles/ChatMessage.css";

const ChatMessage = (props: ChatMessageProps) => {
  const queryClient = useQueryClient();
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
      <div className="chat-message">
        <img
          src="../src/assets/profile-logo-image.jpeg"
          className="chat-message-image"
        />
        <div className="message">
          <h1 className="message-sender">{props.userId}</h1>
          <h2 className="message-text">{props.question}</h2>
        </div>
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
  );
};

export default ChatMessage;
