import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../assets/profile-logo-image.jpeg";
import { deleteMessage } from "../lib/fetchers";
import { AIMessageProps, ChatMessageProps } from "../types";
import "../styles/ChatMessage.css";
import "../assets/ai-profile-picture.jpeg";

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
          <h1 className="message-sender">{props.username}</h1>
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
      

      <AIMessage message={props.answer} />

    </div>
  );
};

const AIMessage = ({message}: AIMessageProps) => {
  return (
    <div className="chat-message">
      <img
        src="../src/assets/ai-profile-picture.jpeg"
        className="chat-message-image"
      />
      <div className="message">
        <h1 className="message-sender">BeavsAI</h1>
        <h2 className="message-text">{message}</h2>
      </div>
    </div>
  );
}

export default ChatMessage;
