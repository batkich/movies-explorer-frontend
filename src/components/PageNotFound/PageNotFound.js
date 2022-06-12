import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pagenotfound">
      <div className="pagenotfound-textbox">
        <h3 className="pagenotfound-textbox__status">404</h3>
        <p className="pagenotfound-textbox__message">Страница не найдена</p>
      </div>
      <Link to="/" className="pagenotfound__link">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
