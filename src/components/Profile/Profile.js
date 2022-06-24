import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as Validation from "../../utils/Validation";
import * as profileSetting from "../../utils/constants";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [email, setEmail] = React.useState("");

  const [name, setName] = React.useState("");

  const profileForm = document.querySelector(".profileform");
  const submitButton = document.querySelector(".profileform-buttons__element");
  const inputName = document.querySelector(".profileform-inputs__value");

  React.useEffect(() => {
    if (profileForm !== null) {
      Validation.enableValidation(profileForm, profileSetting.profileSetting);
      if (inputName.value === "") {
        submitButton.setAttribute("disabled", "disabled");
      }
    }
  });

  function toEdit(e) {
    e.preventDefault();
    props.updateUser({ name, email });
  }

  function toLogout(e) {
    e.preventDefault();
    props.logOut();
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="profile">
      <h3 className="profile__title">Привет, {currentUser.name}!</h3>
      <form className="profileform" onSubmit={toEdit}>
        <div className="profileform-inputs">
          <div className="profileform-inputs__name">
            <span className="profileform-inputs__title">Имя</span>
            <input
              type="text"
              id="profile-name"
              className="profileform-inputs__value"
              onChange={handleSetName}
              required
            ></input>
            <span className="profileform-inputs__error profile-name-error"></span>
          </div>
          <div className="profileform-inputs__email">
            <span className="profileform-inputs__title">Email</span>
            <input
              type="email"
              id="profile-email"
              className="profileform-inputs__value"
              onChange={handleSetEmail}
              required
            ></input>
            <span className="profileform-inputs__error profile-email-error"></span>
          </div>
        </div>
        <div className="profileform-buttons">
          <span className="profileform-submit__error">
            {props.errorMessage}
          </span>
          <button
            type="submit"
            className="profileform-buttons__element profileform-buttons__element_disabled"
          >
            Редактировать
          </button>
          <button
            className="profileform-buttons__element profileform-buttons__element_type_logout"
            onClick={toLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}
export default Profile;
