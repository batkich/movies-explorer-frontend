import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Login(props) {
  // React.useEffect(() => {
  //     props.handleheader();
  //   });

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

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
      <form className="loginform">
        <div className="loginform-inputs">
          <span className="loginform-inputs__title">Email</span>
          <input
            className="loginform-inputs__value"
            type="email"
            onChange={handleSetEmail}
          ></input>
          <span className="loginform-inputs__error"></span>
          <span className="loginform-inputs__title">Пароль</span>
          <input
            className="loginform-inputs__value loginform-inputs__value_type_error"
            type="password"
            onChange={handleSetPassword}
          ></input>
          <span className="loginform-inputs__error"></span>
        </div>
        <div className="loginform-submit">
          <button className="loginform-submit__button" onClick={loggedIn}>
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
