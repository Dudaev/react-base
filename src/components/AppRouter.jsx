import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routers } from "../routes/index";

function AppRouter() {
  return (
    <>
      <Routes>
        {routers.map((route) => (
          <Route path={route.path} element={route.element}></Route>
        ))}
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
