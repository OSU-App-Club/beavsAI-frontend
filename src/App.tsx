import { Route, Routes } from "react-router-dom";
import Layout from "./components/misc/Layout";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import SingleChat from "./pages/SingleChat";

function App() {
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
              <SingleChat />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
