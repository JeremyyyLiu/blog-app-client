import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Click to create post
  async function handleCreatePost(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={handleCreatePost}>
      {/* Input title */}
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      {/* Input body */}
      <input
        type="text"
        placeholder={"Write something down..."}
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />

      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePost;
