import { UserButton, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import g10 from "../assets/g10.svg";
import { createChat, getChatHistory } from "../lib/fetchers";
import { ChatLink } from "../types";

const Sidebar = ({ token }: { token: string }) => {
  const { user } = useUser();
  const userId = user?.id ?? "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["allUserChats", userId],
    queryFn: () => getChatHistory(userId, token),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["createChat", userId],
    mutationFn: () => createChat(userId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allUserChats", userId],
      });
    },
  });

  // TODO: Add Sidebar Loading Skeleton

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    !isLoading && (
      <div className="side-bar">
        <div className="header-title">
          <h1 className="intro-text">BeavsAI</h1>
          <div className="intro-image">
            <img src={g10} alt="Logo" />
          </div>
        </div>

        <button
          style={{
            backgroundColor: "#f5f5f5",
            color: "#000",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          onClick={() => mutation.mutate()}
        >
          add chat
        </button>

        <div className="chat-box-container">
          {data?.map((chat: ChatLink) => (
            <NavLink
              to={`/chat/${chat._id}`}
              className="nav-link"
              key={chat._id}
            >
              {chat._id}
            </NavLink>
          ))}
        </div>

        {/* TODO: Properly style this */}
        <div className="profile-container">
          <h1 className="username">{user?.fullName}</h1>
        </div>
      </div>
    )
  );
};

export default Sidebar;
