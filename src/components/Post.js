import "../App.css";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="text">
        <h2>M2 Ultra - The most powerful Apple Silicon chip yet</h2>

        <p className="author">Dawid Paszko</p>

        <p className="summary">
          At WWDC 2023 today Apple unveiled the M2 Ultra, its most powerful
          Apple Silicon chip yet. With the M2 Pro and Max launching earlier this
          year, and rumors pointing to Apple finally bringing the M2 generation
          to the Mac Studio and Mac Pro, the launch of the Ultra wasn’t a major
          surprise.
        </p>
      </div>
    </div>
  );
};

export default Post;
