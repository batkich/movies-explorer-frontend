import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio-list">
        <li className="portfolio-list__cell portfolio-list__cell_type_text">
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/how-to-learn"
            target="_blank" 
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/how-to-learn"
            target="_blank" 
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio-list__cell"></li>
        <li className="portfolio-list__cell portfolio-list__cell_type_text">
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/russian-travel"
            target="_blank" 
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/russian-travel"
            target="_blank" 
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio-list__cell"></li>
        <li className="portfolio-list__cell portfolio-list__cell_type_text">
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/react-mesto-api-full"
            target="_blank" 
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio-list__link"
            href="https://github.com/batkich/react-mesto-api-full"
            target="_blank" 
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
