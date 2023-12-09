import { SenderType, messages } from "../../types";
import { Message } from "../chat";
import { AIMessage } from "../chat/Message";

export default function BrowserWindow() {
  return (
    <>
      <div className="mockup-browser bg-zinc-700/30 dark:bg-zinc-900/40">
        <div className="mockup-browser-toolbar dark:border dark:p-6 dark:rounded-lg dark:border-zinc-700/30">
          <div className="input border-orange-600 shadow-xl text-zinc-100 align-center mb-2 font-light">
            https://beavs.ai
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-16 dark:bg-zinc-900/70 h-full bg-white/60">
          <section className="flex flex-col w-full h-full gap-6 overflow-auto">
            {messages.map((message, index) => {
              const body =
                message.senderType === SenderType.AI
                  ? message.answer
                  : message.question;
              const Component =
                message.senderType === SenderType.AI ? AIMessage : Message;
              const alignment =
                message.senderType === SenderType.AI
                  ? "justify-end"
                  : "justify-start";

              return (
                <div key={index} className={`flex ${alignment} w-full`}>
                  <Component
                    show={true}
                    message={body}
                    question={body}
                    userId=""
                    chatId=""
                    _id=""
                    token=""
                    username="You"
                    index={0}
                  />
                </div>
              );
            })}
          </section>
          <div className="flex space-y-4 w-1/2 place-self-center mt-16 items-end">
            <input
              type="text"
              className="p-4 w-full mr-4 border-2 border-orange-500 rounded-lg bg-zinc-100 dark:bg-transparent dark:text-white dark:border-orange-500"
              placeholder="What days of the week does this class meet?"
              disabled
            />
            <div className="flex">
              <button className="mt-2 p-2 rounded bg-orange-600 text-white dark:bg-black/30 dark:text-orange-500 w-full hover:bg-orange-700 dark:hover:bg-gray-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
