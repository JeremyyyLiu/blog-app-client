import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle register function
  async function handleRegister(event) {
    event.preventDefault();

    // request '/register'
    const response = await fetch(`http://localhost:8080/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    response.status === 200
      ? alert("Registration successful!")
      : alert("Registration failed!");
  }

  return (
    <form className="register" onSubmit={handleRegister}>
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
      <button>Register</button>
    </form>
  );
}
