import PostsPage from "../pages/PostsPage.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";

export const routers = [
  { path: "/posts", element: <PostsPage /> },
  { path: "/posts/:id", element: <PostIdPage /> },
];
