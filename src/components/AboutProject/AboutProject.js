import React from "react";
import "./AboutProject.css";

function AboutProject(props) {
  React.useEffect(() => {
    props.handleNavBar();
  });

  return (
    <div className="aboutproject" id="aboutproject">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__line"></div>
      <ul className="aboutproject-table">
        <li className="aboutproject-table__cell">
          <h3 className="aboutproject-table__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutproject-table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutproject-table__cell">
          <h3 className="aboutproject-table__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutproject-table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="aboutproject-tablestage">
        <li className="aboutproject-tablestage__cell aboutproject-tablestage__cell_type_short">
          <p className="aboutproject-tablestage__time aboutproject-tablestage__time_type_short">
            1 неделя
          </p>
          <p className="aboutproject-tablestage__tehn">Back-end</p>
        </li>
        <li className="aboutproject-tablestage__cell aboutproject-tablestage__cell_type_long">
          <p className="aboutproject-tablestage__time">4 недели</p>
          <p className="aboutproject-tablestage__tehn">Front-end</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutProject;
