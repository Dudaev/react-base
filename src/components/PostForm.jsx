import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

function PostForm({ addPost }) {
  const [post, setPost] = useState({ title: "", body: "" });
  function addNewPost(e) {
    e.preventDefault();
    addPost({ ...post, id: Date.now() });
    setPost({ title: "", body: "" });
  }
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Название поста"
        type="text"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
        type="text"
      />
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
}

export default PostForm;
