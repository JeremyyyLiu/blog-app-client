import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Handle register function
  async function handleLogin(event) {
    event.preventDefault();

    // request '/login'
    const response = await fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    response.status === 200
      ? setRedirect(true)
      : alert("Invalid username or password. Please try again.");
  }

  // Redirect to the homepage if servers checks credentials ok
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      {/* Header */}
      <h1>Login</h1>

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
