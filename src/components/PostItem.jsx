import React from "react";
import Button from "./UI/Button/Button";
const PostItem = function () {
  return (
    <div className="post">
      <div>
        <p>1. sunt aut facere repellat provident occaecati excepturi optio</p>
        <p>
          reprehenderit quia et suscipit suscipit recusandae consequuntur
          expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum
          est autem sunt rem eveniet architecto
        </p>
      </div>

      <div className="post__btns">
        <Button onClick={() => console.log("Открыть")}>Открыть</Button>
        <Button onClick={() => console.log("Закрыть")}>Закрыть</Button>
      </div>
    </div>
  );
};

export default PostItem;
