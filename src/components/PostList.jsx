import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, removePost }) {
  return (
    <div>
      <h2 className="postList__title">Посты про JS</h2>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} remove={removePost} />
      ))}
    </div>
  );
}

export default PostList;
