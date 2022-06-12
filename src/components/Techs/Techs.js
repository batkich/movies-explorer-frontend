import React from "react";
import "./Techs.css";

function Techs(props) {
  React.useEffect(() => {
    props.handleNavBar();
  });

  return (
    <div className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__line"></div>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="table-tech">
        <li className="table-tech__cell">HTML</li>
        <li className="table-tech__cell">CSS</li>
        <li className="table-tech__cell">JS</li>
        <li className="table-tech__cell">React</li>
        <li className="table-tech__cell">Git</li>
        <li className="table-tech__cell">Express.js</li>
        <li className="table-tech__cell">mongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;
