// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Object is possibly 'null'.
import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteChat, getChatHistory } from "../../lib/fetchers";
import { History } from "../chat";
import Dropdown from "./Dropdown";
import SidebarHeader from "./Header";
import AddChatModal from "./Modal";

const Sidebar = ({ token }: { token: string }) => {
  const { user } = useUser();
  const { chatId } = useParams();
  const userId = user?.id ?? "";
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ["allUserChats", userId],
    queryFn: () => getChatHistory(userId, token),
    enabled: userId !== "" && userId !== "undefined" && userId !== undefined,
  });
  const mutation = useMutation({
    mutationKey: ["deleteChat", userId],
    mutationFn: () => deleteChat(userId, activeChat, token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allUserChats", userId],
      });
      queryClient.invalidateQueries({
        queryKey: ["loadDocument", activeChat],
      });
      navigate("/chat");
    },
  });

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="sidebar flex flex-col items-center h-full max-h-screen overflow-y-auto border-r-4 border-slate-300 dark:border-white">
      <SidebarHeader />
      <AddChatModal token={token} userId={userId} />
      <History
        data={data}
        mutation={mutation}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        chatId={chatId}
      />
      <Dropdown user={user} />
    </div>
  );
};

export default Sidebar;
