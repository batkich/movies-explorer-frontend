import React from "react";
import "./Navigation.css";
import icon from "../../images/icon__profile.svg";
import { Link } from "react-router-dom";
import menuPicture from "../../images/menu.svg";

function Navigation(props) {
  function changeMenuView() {
    props.useMenu();
  }

  return (
    <>
      {props.navigationtype ? (
        <div className="navigation">
          <div className="navigation-linkbox navigation-linkbox_type_films">
            <Link to="/movies" className="navigation-linkbox__link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation-linkbox__link">
              Сохранённые фильмы
            </Link>
          </div>
          <div className="navigation-linkbox navigation-linkbox_type_profile">
            <Link
              to="/profile"
              className="navigation-linkbox__link navigation-linkbox__link_type_akk"
            >
              <p className="navigation-linkbox__profile-text">Аккаунт</p>
              <img
                src={icon}
                alt="Логотип профиля"
                className="navigation-linkbox__profile-logo"
              ></img>
            </Link>
            <button className="navigation__menu">
              <img
                className="navigation__menu-picture"
                src={menuPicture}
                alt="Навигационное меню"
                onClick={changeMenuView}
              ></img>
            </button>
          </div>
        </div>
      ) : (
        <div className="navigation navigation_type_auth">
          <Link
            to="/signup"
            className="navigation-linkbox__link navigation-linkbox__link_type_signup"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation-linkbox__link navigation-linkbox__link_type_signin"
          >
            Войти
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation;
