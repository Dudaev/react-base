import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";

function PostItem({ post, remove }) {
  const navigate = useNavigate();

  return (
    <div className="postItem">
      <div>
        <strong>
          <p>
            {post.id}. {post.title}
          </p>
        </strong>

        <p>{post.body}</p>
      </div>
      <div className="postItem__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(post.id)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
