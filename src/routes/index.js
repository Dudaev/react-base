import PostsPage from "../pages/PostsPage.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

export const privateRouters = [
  { path: "/about", element: <AboutPage /> },
  { path: "/posts", element: <PostsPage /> },
  { path: "/posts/:id", element: <PostIdPage /> },
];

export const publicRouters = [{ path: "/login", element: <LoginPage /> }];
