import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/misc/Layout";
import { useUserIdStore } from "./lib/zustand";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import SingleChat from "./pages/SingleChat";

function App() {
  const { user } = useUser();
  const setUserId = useUserIdStore.getState().setUserId;
  useEffect(() => {
    setUserId(user?.id ?? "");
  }, [user, setUserId]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chat"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <Layout>
              <SingleChat user={user} />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
