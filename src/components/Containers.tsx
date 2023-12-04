import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addMessageToChat } from "../lib/fetchers";
import { ChatContainerProps, Message, MessageInputProps } from "../types";
import ChatMessage from "./ChatMessage";

const MessageInput = (props: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { chatId } = useParams<{ chatId: string }>();
  const id = chatId ?? "";
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["createMessage", props.userId],
    mutationFn: () => addMessageToChat(props.userId, id, message, props.token),
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({
        queryKey: ["getSingleChatMessages", id],
      });
    },
    onError: () => {
      setErrorMessage("Error sending message");
    },
  });

  return (
    <div className="send-message-container">
      <p style={{ color: "red" }}>{errorMessage}</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter Message"
        className="message-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            mutation.mutate();
          }
        }}
      />
      <button
        onClick={() => {
          mutation.mutate();
        }}
        className="send-message-button"
      >
        &#10140;
      </button>
    </div>
  );
};

export const ChatContainer = (props: ChatContainerProps) => {
  const [parent] = useAutoAnimate();

//   if (props.messages.length === 0) {
//     return (
//       <>
//         <div className="welcome-container" ref={parent}>
//           <h1 className="welcome-text">Welcome to BeavsAI!</h1>
//           <h2 className="welcome-text">
//             Add a chat in the sidebar to get started!
//           </h2>
//         </div>
//       </>
//     );
//   }

  return (
    <div className="message-container" ref={parent}>
      {props.messages.map((message: Message) => (
        <div key={message._id}>
          <ChatMessage
            question={message.question}
            answer={message.answer}
            userId={message.userId}
            _id={message._id}
            chatId={props.chatId}
            token={props.token}
          />
        </div>
      ))}
      <MessageInput userId={props.userId} token={props.token} />
      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
};
