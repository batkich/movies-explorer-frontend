import "./SearchForm.css";

function SearchForm() {
  function toSearch(e) {
    e.preventDefault();
    console.log("Searching something!");
  }

  return (
    <div className="searchform">
      <form className="form">
        <fieldset className="form-box">
          <input
            className="form-box__input"
            type="search"
            placeholder="Фильм"
          ></input>
          <button className="form-box__button" onClick={toSearch}>
            Поиск
          </button>
        </fieldset>
        <fieldset className="form-box form-box_type_checkbox">
          <label className="form-box__label">
            <input
              type="checkbox"
              className="form-box__input form-box__input_type_checkbox"
            ></input>
            <span className="form-box__pseudoinput"></span>
          </label>
          <span className="form-box__checkbox-text">Короткометражки</span>
        </fieldset>
      </form>
      <div className="searchform__line"></div>
    </div>
  );
}

export default SearchForm;
