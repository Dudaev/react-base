import React, { useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";

function PostsPage() {
  const [posts, setPosts] = useState([
    {
      title: "First post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque voluptatem voluptas, temporibus reprehenderit inventore cumque fugit impedit nulla ducimus ipsum cum culpa dolorum, aut eaque ipsam sunt necessitatibus incidunt.",
      id: 1,
    },
  ]);
  const [myModal, setMyModal] = useState(false);

  function addPost(post) {
    setPosts([...posts, post]);
    setMyModal(false);
  }

  function removePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  return (
    <div className="postsPage">
      <MyButton onClick={() => setMyModal(true)}>Создать пост</MyButton>
      <PostList posts={posts} removePost={removePost} />
      <MyModal visible={myModal} setVisible={setMyModal}>
        <PostForm addPost={addPost} />
      </MyModal>
    </div>
  );
}

export default PostsPage;
