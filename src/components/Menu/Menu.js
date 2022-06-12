import "./Menu.css";
import icon from "../../images/icon__profile.svg";
import { Link } from "react-router-dom";

function Menu(props) {
  function closeMenu() {
    props.handleMenu();
  }

  return (
    <div className={props.menuOpen ? "menu" : "menu_invisible"}>
      <div className="menu-linkbox menu-linkbox_type_films">
        <button className="menu-linkbox__button" onClick={closeMenu}>
          +
        </button>
        <Link to="/" className="menu-linkbox__link">
          Главная
        </Link>
        <Link to="/movies" className="menu-linkbox__link">
          Фильмы
        </Link>
        <Link to="/" className="menu-linkbox__link">
          Сохранённые фильмы
        </Link>
      </div>
      <div className="menu-linkbox menu-linkbox_type_profile">
        <Link to="/" className="menu-linkbox__link menu-linkbox__link_type_akk">
          <p className="menu-linkbox__profile-text">Аккаунт</p>
          <img
            src={icon}
            alt="Логотип профиля"
            className="menu-linkbox__profile-logo"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
