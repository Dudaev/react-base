import React, { useContext } from "react";
import MyButton from "../components/UI/MyButton/MyButton";
import MyInput from "../components/UI/MyInput/MyInput";
import { AuthContext } from "../context";

function LoginPage() {
  const { setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };
  return (
    <div className="login">
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите имя" />
        <MyInput type="text" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default LoginPage;
