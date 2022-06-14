import React from "react";
import "./AboutMe.css";
import aboutmePic from "../../images/aboutme.png";

function AboutMe(props) {
  React.useEffect(() => {
    props.handleNavBar();
  });

  return (
    <div className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__line"></div>
      <div className="aboutme-box">
        <div className="aboutme-description">
          <h3 className="aboutme-description__title">Александр</h3>
          <h4 className="aboutme-description__subtitle">
            Фронтенд-разработчик, 33 года
          </h4>
          <article className="aboutme-description__text">
            Я родился и живу в г. Асино Томской области. В 2009 году закончил
            факультет "Лечебное дело" в Томском ВМИ. Женат, имею двоих детей.
            Увлекаюсь охотой, рыбалкой. Недавно начал кодить. После того, как
            прошёл курс ЯндексПрактикума, занимаюсь веб-разработкой.
          </article>
          <div className="aboutme-linkbox">
            <a
              className="aboutme-linkbox__link"
              href="https://ok.ru/profile/186608206120?utm_campaign=web_share&utm_content=profile"
              target="_blank" 
              rel="noreferrer"
            >
              OK
            </a>
            <a
              className="aboutme-linkbox__link"
              href="https://github.com/batkich"
              target="_blank" 
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img
          className="aboutme-box__photo"
          src={aboutmePic}
          alt="Фото студента"
        ></img>
      </div>
    </div>
  );
}

export default AboutMe;
