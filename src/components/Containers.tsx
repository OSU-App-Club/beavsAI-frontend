import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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
      props.setLoadingEffect(true);
      setTimeout(() => {
        props.setLoadingEffect(false);
        queryClient.invalidateQueries({
          queryKey: ["getSingleChatMessages", id],
        });
      }, 1500);
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
            if (message === "") {
              setErrorMessage("Message cannot be empty");
              return;
            }
            mutation.mutate();
          }
        }}
      />
      <button
        onClick={() => {
          if (message === "") {
            setErrorMessage("Message cannot be empty");
            return;
          }
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
  const [loadingEffect, setLoadingEffect] = useState(false);

  // if (props.messages.length === 0) {
  //   return (
  //     <>
  //       <div className="welcome-container" ref={parent}>
  //         <h1 className="welcome-text">Welcome to BeavsAI!</h1>
  //         <h2 className="welcome-text">
  //           Add a chat in the sidebar to get started!
  //         </h2>
  //       </div>
  //     </>
  //   );
  // }
  const messages = [
    {
      message: "Hello, I am BeavsAI! How can I help you?",
      sender: "BeavsAI"
    },
  ]

  return (
    <div className="message-container" ref={parent}>
      <Link to="/" className="btn">
        Back
      </Link>
      {props.messages.map((message: Message) => (
        <div key={message._id}>
          <ChatMessage
            question={message.question}
            answer={message.answer}
            userId={message.userId}
            _id={message._id}
            chatId={props.chatId}
            token={props.token}
            username={props.username}
          />
        </div>
      ))}
      {loadingEffect && (
        <h2>Loading...</h2>
      )}
      <MessageInput userId={props.userId} token={props.token} setLoadingEffect={setLoadingEffect} />
    </div>
  );
};
