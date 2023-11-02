import { useState } from 'react'
import beaverLogo from "./assets/beaver-logo.png";
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
  };

  return (
    <div className="login-container">
      <img src={beaverLogo} alt="Oregon State Beavers Logo" />
      <h1>SIGN IN</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default App
