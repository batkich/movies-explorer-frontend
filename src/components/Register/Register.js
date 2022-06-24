import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import * as Validation from "../../utils/Validation";
import * as registerSetting from "../../utils/constants";

function Register(props) {
  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const registerForm = document.querySelector(".registerform");
  const submitButton = document.querySelector(".registerform-submit__button");
  const inputName = document.querySelector(".registerform-inputs__value");

  React.useEffect(() => {
    if (registerForm !== null) {
      Validation.enableValidation(
        registerForm,
        registerSetting.registerSetting
      );
      if (inputName.value === "") {
        submitButton.setAttribute("disabled", "disabled");
      }
    }
  });

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, password, name);
  }

  return (
    <div className="register">
      <div className="register-title">
        <Link to="/" className="register__logo-link">
          <img
            className="register-title__logo"
            src={logo}
            alt="Логотип проекта"
          ></img>
        </Link>
        <h2 className="register-title__text">Добро пожаловать!</h2>
      </div>
      <form className="registerform" noValidate onSubmit={handleSubmit}>
        <div className="registerform-inputs">
          <span className="registerform-inputs__title">Имя</span>
          <input
            className="registerform-inputs__value"
            id="register-input_name"
            type="text"
            onChange={handleSetName}
            minLength="2"
            maxLength="30"
            required
          ></input>
          <span className="registerform-inputs__error register-input_name-error"></span>
          <span className="registerform-inputs__title">Email</span>
          <input
            type="email"
            id="register-input_email"
            onChange={handleSetEmail}
            className="registerform-inputs__value"
            required
          ></input>
          <span className="registerform-inputs__error register-input_email-error"></span>
          <span className="registerform-inputs__title">Пароль</span>
          <input
            type="password"
            id="register-input_password"
            onChange={handleSetPassword}
            className="registerform-inputs__value registerform-inputs__value_type_error"
            required
          ></input>
          <span className="registerform-inputs__error register-input_password-error"></span>
        </div>
        <div className="registerform-submit">
          <span className="registerform-submit__error">
            {props.errorMessage}
          </span>
          <button
            type="submit"
            className="registerform-submit__button registerform-submit__button_disabled"
          >
            Зарегистрироваться
          </button>
          <div className="registerform-submit__description">
            <span className="registerform-submit__question">
              Уже зарегистрированы?
            </span>
            <Link to="/signin" className="registerform-submit__link">
              Войти
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
