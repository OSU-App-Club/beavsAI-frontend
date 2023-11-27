import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import g10 from "./assets/g10.svg";
import team from "./assets/team-picture.jpeg";
import './App.css';
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import Auth from "./Auth";
import Home from "./pages/Home";
import Chat from "./pages/Chat"

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey} appearance={dark}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </ClerkProvider>
    </>
  );
};

export default App
