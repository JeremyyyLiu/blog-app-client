import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <div dangerourlySetInnerHTML={{ __html: postInfo.body }}></div>
    </div>
  );
};

export default PostPage;
