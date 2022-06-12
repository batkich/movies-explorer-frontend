import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Register() {
  function toSubmit(e) {
    e.preventDefault();
    console.log("Submited!");
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
      <form className="registerform">
        <div className="registerform-inputs">
          <span className="registerform-inputs__title">Имя</span>
          <input className="registerform-inputs__value" value="Виталий"></input>
          <span className="registerform-inputs__error"></span>
          <span className="registerform-inputs__title">Email</span>
          <input
            className="registerform-inputs__value"
            value="pochta@yandex.ru"
          ></input>
          <span className="registerform-inputs__error"></span>
          <span className="registerform-inputs__title">Пароль</span>
          <input
            className="registerform-inputs__value registerform-inputs__value_type_error"
            value="ВиталийВиталий"
            type="password"
          ></input>
          <span className="registerform-inputs__error">
            Что-то пошло не так...
          </span>
        </div>
        <div className="registerform-submit">
          <button className="registerform-submit__button" onClick={toSubmit}>
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
