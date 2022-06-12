import "./Profile.css";

function Profile() {
  function toEdit(e) {
    e.preventDefault();
    console.log("Edited!");
  }

  function toLogout(e) {
    e.preventDefault();
    console.log("Logout!");
  }

  return (
    <div className="profile">
      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profileform">
        <div className="profileform-inputs">
          <div className="profileform-inputs__name">
            <span className="profileform-inputs__title">Имя</span>
            <input
              value="Виталий"
              className="profileform-inputs__value"
            ></input>
          </div>
          <div className="profileform-inputs__email">
            <span className="profileform-inputs__title">Email</span>
            <input
              value="pochta@yandex.ru"
              className="profileform-inputs__value"
            ></input>
          </div>
        </div>
        <div className="profileform-buttons">
          <button className="profileform-buttons__element" onClick={toEdit}>
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
