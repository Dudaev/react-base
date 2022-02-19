import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRouters, publicRouters } from "../routes/index";

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) return <h1>LOADING</h1>;
  return isAuth ? (
    <>
      <Routes>
        {privateRouters.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          ></Route>
        ))}
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        {publicRouters.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          ></Route>
        ))}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
