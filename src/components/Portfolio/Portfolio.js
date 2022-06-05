import './Portfolio.css';

function Portfolio () {
    return (
<div className="portfolio">
    <h2 className="portfolio__title">
        Портфолио
    </h2>
    <ul className="portfolio-list">
        <li className="portfolio-list__cell portfolio-list__cell_type_text"><a className="portfolio-list__link" href="https://github.com/batkich/how-to-learn">Статичный сайт</a>
        <a className="portfolio-list__link" href="https://github.com/batkich/how-to-learn">↗</a>
        </li>
        <li className="portfolio-list__cell">
        </li>
        <li className="portfolio-list__cell portfolio-list__cell_type_text"><a className="portfolio-list__link" href="https://github.com/batkich/russian-travel">Адаптивный сайт</a>
        <a className="portfolio-list__link" href="https://github.com/batkich/russian-travel">↗</a>
        </li>
        <li className="portfolio-list__cell">
        </li>
        <li className="portfolio-list__cell portfolio-list__cell_type_text"><a className="portfolio-list__link" href="https://github.com/batkich/react-mesto-api-full">Одностраничное приложение</a>
        <a className="portfolio-list__link" href="https://github.com/batkich/react-mesto-api-full">↗</a>
        </li>
    </ul>
</div>
);
}

export default Portfolio;