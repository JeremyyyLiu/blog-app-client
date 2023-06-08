import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleCreatePost(event) {
    const data = new FormData();
    data.set("title", title);
    data.set("body", body);

    event.preventDefault();

    const response = await fetch("http://locahost:8080/post", {
      method: "POST",
      body: data,
    });
  }

  return (
    <form onSubmit={handleCreatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <ReactQuill
        placeholder={"Write something down..."}
        value={body}
        onChange={(newValue) => setBody(newValue.target.value)}
      />

      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePost;
