import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/UI/MyNavbar/MyNavbar";
import "./styles/App.css";
import { AuthContext } from "./context";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
