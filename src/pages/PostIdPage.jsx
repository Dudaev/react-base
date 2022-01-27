import React from "react";
import { useParams } from "react-router-dom";

function PostIdPage() {
  const params = useParams();
  return (
    <div className="postIdPage">
      <h2>Вы открыли страницу поста c ID = {params.id}</h2>
      <p>{params.id}. post.title</p>
      <h2>Комментарии</h2>
      <p>post.comments</p>
    </div>
  );
}

export default PostIdPage;
