import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header(props) {
  function useMenu() {
    props.handleMenu();
  }

  return (
    <header
      className={props.headertype ? "header header_type-signed" : "header"}
    >
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип проекта"></img>
      </Link>
      <Navigation
        navigationtype={props.headertype}
        useMenu={useMenu}
      ></Navigation>
    </header>
  );
}

export default Header;
