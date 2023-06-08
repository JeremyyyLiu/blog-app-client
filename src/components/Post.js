import "../App.css";
import React from "react";
import { formatISO9075 } from "date-fns";

const Post = ({ title, body, createdAt }) => {
  return (
    <div className="post">
      <div className="text">
        <h2>{title}</h2>

        <p className="author">Dawid Paszko</p>
        <time>{formatISO9075(new Date(createdAt))}</time>

        <p className="summary">{body}</p>
      </div>
    </div>
  );
};

export default Post;
