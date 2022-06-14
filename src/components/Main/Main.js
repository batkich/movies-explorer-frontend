import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  const [navBarOn, setNavBarOn] = React.useState(false);
  const aboutProjectrAnchor = document.getElementById("aboutproject");
  const TechsAnchor = document.getElementById("techs");
  const aboutMeAnchor = document.getElementById("aboutme");

  React.useEffect(() => {
    return;
  }, [navBarOn]);

  function handleNavBar() {
    setNavBarOn(true);
  }

  function scrollToAboutProject() {
    aboutProjectrAnchor.scrollIntoView();
  }

  function scrollToTechs() {
    TechsAnchor.scrollIntoView();
  }

  function scrollToMe() {
    aboutMeAnchor.scrollIntoView();
  }

  return (
    <div className="main">
      <Promo></Promo>
      <NavTab
        scrollProject={scrollToAboutProject}
        scrollTechs={scrollToTechs}
        scrollMe={scrollToMe}
      ></NavTab>
      <AboutProject handleNavBar={handleNavBar}></AboutProject>
      <Techs handleNavBar={handleNavBar}></Techs>
      <AboutMe handleNavBar={handleNavBar}></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
}

export default Main;
