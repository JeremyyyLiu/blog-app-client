import { useState } from "react";
import serverUrl from "../utils/config";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle register function
  function handleRegister(event) {
    event.preventDefault();
  }

  return (
    <form className="register">
      {/* Header */}
      <h1>Register</h1>

      {/* Input field */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {/* Submit button */}
      <button>Login</button>
    </form>
  );
}
