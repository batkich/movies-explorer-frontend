import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import icon from '../../images/icon__profile.png';
import { Link } from 'react-router-dom';


function Header () {

    const [signed, setSigned ] = React.useState(false);

    function handleSign () {
        setSigned(true)
    }

    console.log(handleSign)

    return (
<header className={signed ? "header header_type-signed" : "header"}>
    <img className="header__logo" src={logo} alt="Логотип проекта"></img>
        {signed ? 
        <div className="header-linkbox">
        <div className="header-linkbox header-linkbox_type_films">
        <Link to="/" className="header-linkbox__link">Фильмы</Link>
        <Link to="/" className="header-linkbox__link">Сохранённые фильмы</Link>
        </div>
        <div className="header-linkbox header-linkbox_type_profile">
        <Link to="/" className="header-linkbox__link header-linkbox__link_type_akk"><p className='header-linkbox__profile-text'>Аккаунт</p><img src={icon} alt="Логотип профиля" className='header-linkbox__profile-logo'></img></Link>
        </div>
        </div>
         : 
         <div className="header-linkbox header-linkbox_type_auth">
        <Link to="/" className="header-linkbox__link header-linkbox__link_type_signup">Регистрация</Link>
        <Link to="/" className="header-linkbox__link header-linkbox__link_type_signin">Войти</Link>
        </div>
        }
</header>
);
}

export default Header;