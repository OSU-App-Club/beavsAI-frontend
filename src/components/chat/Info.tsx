import React from "react";
import { Chat } from "../../types";

interface InfoProps {
  chat: Chat;
}

const Info: React.FC<InfoProps> = ({ chat }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="dark:bg-gray-900 bg-slate-200">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow mb-4">
          <div className="flex-grow flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white underline underline-offset-8">
              Your <span className="text-orange-600">"{chat.courseName}"</span>{" "}
              AI Assistant
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Created on {formatDate(chat.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
