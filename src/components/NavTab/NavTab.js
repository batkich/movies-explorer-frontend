import React from "react";
import "./NavTab.css";

function NavTab(props) {
  function scrollAnchorProject(e) {
    e.preventDefault();
    props.scrollProject();
  }

  function scrollAnchorTechs(e) {
    e.preventDefault();
    props.scrollTechs();
  }

  function scrollAnchorMe(e) {
    e.preventDefault();
    props.scrollMe();
  }

  return (
    <ul className="navtab">
      <li className="navtab__element">
        <button className="navtab__element-link" onClick={scrollAnchorProject}>
          О проекте
        </button>
      </li>
      <li className="navtab__element">
        <button className="navtab__element-link" onClick={scrollAnchorTechs}>
          Технологии
        </button>
      </li>
      <li className="navtab__element">
        <button className="navtab__element-link" onClick={scrollAnchorMe}>
          Студент
        </button>
      </li>
    </ul>
  );
}

export default NavTab;
