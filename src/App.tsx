import { useUser } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Chat, { SingleChat } from "./pages/Chat";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  const { user } = useUser();
  return (
    user && (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:chatId" element={<SingleChat user={user} />} />
        </Routes>
      </>
    )
  );
}

export default App;
