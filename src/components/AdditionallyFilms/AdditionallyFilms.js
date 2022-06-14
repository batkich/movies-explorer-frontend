import "./AdditionallyFilms.css";

function AdditionallyFilms() {
  function toShowElse(e) {
    e.preventDefault();
    console.log("Else");
  }

  return (
    <div className="additionallyfilms">
      <button className="additionallyfilms__button" onClick={toShowElse}>
        Ещё
      </button>
    </div>
  );
}

export default AdditionallyFilms;
