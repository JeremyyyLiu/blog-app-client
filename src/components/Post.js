import "../App.css";
import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, body, author, createdAt }) => {
  return (
    <div className="post">
      <div className="text">
        {/* Title */}
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

        {/* Author and time */}
        <p className="author">{author.username}</p>
        <time>{formatISO9075(new Date(createdAt))}</time>

        {/* Content */}
        <p className="summary">{body}</p>
      </div>
    </div>
  );
};

export default Post;
