import React, { useEffect, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import MySelect from "../components/UI/MySelect/MySelect";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [myModal, setMyModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  function addPost(post) {
    setPosts([...posts, post]);
    setMyModal(false);
  }

  function removePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(Math.ceil(totalCount / limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  return (
    <div className="postsPage">
      <MyButton onClick={() => setMyModal(true)}>Создать пост</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        options={[
          { name: "5", value: 5 },
          { name: "10", value: 10 },
          { name: "25", value: 25 },
          { name: "Показать все", value: -1 },
        ]}
        value={limit}
        onChange={setLimit}
        defaultValue={"Кол-во элементов на странице"}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList posts={posts} removePost={removePost} title="Посты про JS" />
      <MyModal visible={myModal} setVisible={setMyModal}>
        <PostForm addPost={addPost} />
      </MyModal>
    </div>
  );
}

export default PostsPage;
