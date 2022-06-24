import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import * as Validation from "../../utils/Validation";
import * as loginSetting from "../../utils/constants";

function Login(props) {
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const loginForm = document.querySelector(".loginform");
  const submitButton = document.querySelector(".loginform-submit__button");
  const inputName = document.querySelector(".loginform-inputs__value");

  React.useEffect(() => {
    if (loginForm !== null) {
      Validation.enableValidation(loginForm, loginSetting.loginSetting);
      if (inputName.value === "") {
        submitButton.setAttribute("disabled", "disabled");
      }
    }
  });

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function loggedIn(e) {
    e.preventDefault();
    props.signHandler(email, password);
  }

  return (
    <div className="login">
      <div className="login-title">
        <Link to="/" className="login__logo-link">
          <img
            className="login-title__logo"
            src={logo}
            alt="Логотип проекта"
          ></img>
        </Link>
        <h2 className="login-title__text">Рады видеть!</h2>
      </div>
      <form className="loginform" onSubmit={loggedIn}>
        <div className="loginform-inputs">
          <span className="loginform-inputs__title">Email</span>
          <input
            className="loginform-inputs__value"
            id="login-email"
            type="email"
            onChange={handleSetEmail}
            required
          ></input>
          <span className="loginform-inputs__error login-email-error"></span>
          <span className="loginform-inputs__title">Пароль</span>
          <input
            className="loginform-inputs__value loginform-inputs__value_type_error"
            id="login-password"
            type="password"
            onChange={handleSetPassword}
            required
          ></input>
          <span className="loginform-inputs__error login-password-error"></span>
        </div>
        <div className="loginform-submit">
          <span className="loginform-submit__error">{props.errorMessage}</span>
          <button className="loginform-submit__button loginform-submit__button_disabled">
            Войти
          </button>
          <div className="loginform-submit__description">
            <span className="loginform-submit__question">
              Ещё не зарегистрированы?
            </span>
            <Link className="loginform-submit__link" to="/signup">
              Регистрация
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
