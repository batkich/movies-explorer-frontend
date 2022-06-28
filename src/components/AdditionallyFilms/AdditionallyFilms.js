import React from "react";
import "./AdditionallyFilms.css";

function AdditionallyFilms(props) {
  const [visibility, setVisibility] = React.useState(false);

  React.useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  function toShowElse(e) {
    e.preventDefault();
    props.addFilms();
  }

  return (
    <div
      className={
        visibility
          ? "additionallyfilms additionallyfilms_type_on"
          : " additionallyfilms"
      }
    >
      <button className="additionallyfilms__button" onClick={toShowElse}>
        Ещё
      </button>
    </div>
  );
}

export default AdditionallyFilms;
