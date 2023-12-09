import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useEffect, useRef } from "react";
import { ChatContainerProps, Message, SenderType } from "../../types";
import ChatMessage, { AIMessage } from "./Message";

export default function Messages(props: ChatContainerProps) {
  const options = useRef({ duration: 300 }).current;
  const [cbRef] = useAutoAnimate(options);

  useEffect(() => {
    const bottom = document.getElementById("bottom");
    bottom?.scrollIntoView({ behavior: "smooth" });
  }, [props.messages.length]);

  if (props.messages.length === 0) {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-col items-center justify-center gap-6 max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Welcome, {props.username}!
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Use the chat box below to ask a question about your course!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col h-full w-full gap-16"
      ref={cbRef}
      id="messages"
    >
      {props.messages.map((message: Message, index: number) => (
        <React.Fragment key={message._id}>
          <div
            className={`flex flex-col ${
              message.senderType === SenderType.Human
                ? "items-start"
                : "items-end"
            } pb-8`}
          >
            {message.senderType === SenderType.Human ? (
              <ChatMessage
                question={message.question}
                answer={message.answer}
                userId={message.userId}
                _id={message._id}
                chatId={props.chatId}
                token={props.token}
                username={props.username}
                index={index}
              />
            ) : (
              <AIMessage
                message={message.answer}
                show={message.answer !== ""}
              />
            )}
          </div>
        </React.Fragment>
      ))}

      <div id="bottom" />
    </div>
  );
}
