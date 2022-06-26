import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { Switch, Route, useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import * as Constants from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [signed, setSigned] = React.useState(true);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const [deleteButton, setDeleteButton] = React.useState(false);

  const [elementVisible, setElementVisible] = React.useState(false);

  const [addButtonVisible, setAddButtonVisible] = React.useState(false);

  const [rowsNumber, setRowsNumber] = React.useState(4);

  const [currentUser, setCurrentUser] = React.useState({});

  const [render, setRender] = React.useState(false);

  const [savedFilmsArray, setSavedFilmsArray] = React.useState([]);

  const [locationMovies, setLocationMovies] = React.useState(false);

  const [updProfile, setUpdProfile] = React.useState(false);

  const [profilePageOpen, setProfilePageOpen] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");

  const history = useHistory();

  function handleRender() {
    setRender(!render);
  }

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClosed() {
    setMenuOpen(false);
  }

  function handleDeleteButtonOn() {
    setDeleteButton(true);
  }

  function handleDeleteButtonOff() {
    setDeleteButton(false);
  }

  function changeRowsNumber(value) {
    setRowsNumber(value);
  }

  function handleAddButton(value) {
    setAddButtonVisible(value);
  }

  function handlePreloaderVisibility () {
    setElementVisible(true);
    setTimeout(setElementVisible, 1000, false);
  }

  React.useEffect(() => {
    tokenCheck();
    setAddButtonVisible(false);
    const token = localStorage.getItem("token");
    if (signed && token) {
      getSavedFilms();
    }
    if (history.location.pathname === "/movies") {
      setLocationMovies(true);
    }
    if (history.location.pathname === "/profile") {
      setProfilePageOpen(true);
    }
  }, [history.location]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      MoviesApi.getMovies()
        .then((res) => {
          if (res) {
            let arrayJSON = JSON.stringify(res);
            localStorage.setItem("filmsArray", arrayJSON);
          } else {
            return Constants.errorBeatfilmsMessage;
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.getInfo(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    } else {
      setSigned(false);
    }
  }

  function searchMovies(value) {
    setElementVisible(true);
    handleAddButton(false);
    MoviesApi.getMovies()
      .then((res) => {
        if (res) {
          let arrayJSON = JSON.stringify(res);
          localStorage.setItem("filmsArray", arrayJSON);
        } else {
          return Constants.errorBeatfilmsMessage;
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setTimeout(setElementVisible, 1000, false);
        setTimeout(handleAddButton, 1000, value);
      });
  }

  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then((res, err) => {
        if (res === undefined) {
          setErrorMessage("Что-то пошло не так");
        } else if (res === "Conflict") {
          setErrorMessage("Указанный Email уже используется");
        } else {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLogin(email, password) {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          MainApi.getInfo(res)
            .then((data) => {
              setSigned(true);
              localStorage.setItem("sign", signed);
              history.push("/movies");
              setCurrentUser(data);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        }
        if (res === undefined) {
          setErrorMessage("Что-то пошло не так");
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(data) {
    const token = localStorage.getItem("token");
    setUpdProfile(false);
    MainApi.setProfileInfo(token, data)
      .then((res) => {

       if(res === undefined) {
        setErrorMessage("Что-то пошло не так");
        } else if (res.statusCode === 400) {
          setErrorMessage("Что-то пошло не так");
        } else {
          setCurrentUser(res);
          setUpdProfile(true);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleSaveMovie(data) {
    const token = localStorage.getItem("token");
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    } = data;
    MainApi.saveMovie(
      token,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN
    )
      .then(() => {
        getSavedFilms();
        handleRender();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function toCorrectArray(array) {
    const correctedArray = array.map((item) => {
      const {
        _id,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      } = item;

      const itemToView = {
        id: _id,
        country,
        director,
        duration,
        year,
        description,
        image: {
          url: image,
        },
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      };
      return itemToView;
    });
    addSaveFilmsToStorage(correctedArray);
  }

  function addSaveFilmsToStorage(array) {
    localStorage.setItem("savedFilms", JSON.stringify(array));
    setSavedFilmsArray(array);
  }

  function getSavedFilms() {
    const token = localStorage.getItem("token");
    MainApi.getAllMovies(token)
      .then((res) => {
        if (res) {
          toCorrectArray(res);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDeleteFilm(_id) {
    const token = localStorage.getItem("token");
    MainApi.deleteMovie(token, _id)
      .then((res) => {
        if (res) {
          getSavedFilms();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function logOut() {
    localStorage.removeItem("token");
    setSigned(false);
    window.localStorage.clear();
    history.push("/");
  }

  function handleSearchSaved(array) {
    setSavedFilmsArray(array);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <Header headertype={signed} handleMenu={handleMenuOpen}></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <ProtectedRoute
            path="/movies"
            signed={signed}
            component={Movies}
            handleDeleteButton={handleDeleteButtonOff}
            deleteButton={deleteButton}
            searchMovies={searchMovies}
            elementVisible={elementVisible}
            handleAddButton={handleAddButton}
            addButtonVisible={addButtonVisible}
            rowsNumber={rowsNumber}
            changeRowsNumber={changeRowsNumber}
            handleSaveMovie={handleSaveMovie}
            handleDeleteFilm={handleDeleteFilm}
            handleRender={handleRender}
            locationMovies={locationMovies}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            signed={signed}
            component={SavedMovies}
            handleDeleteButton={handleDeleteButtonOn}
            deleteButton={deleteButton}
            getSavedFilms={getSavedFilms}
            savedFilmsArray={savedFilmsArray}
            handleDeleteFilm={handleDeleteFilm}
            handleSearchSaved={handleSearchSaved}
            handlePreloaderVisibility={handlePreloaderVisibility}
            elementVisible={elementVisible}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            signed={signed}
            component={Profile}
            updateUser={handleUpdateUser}
            logOut={logOut}
            updProfile={updProfile}
            errorMessage={errorMessage}
            profilePageOpen={profilePageOpen}
          ></ProtectedRoute>
          <Route path="/signin">
            <Login
              signHandler={handleLogin}
              errorMessage={errorMessage}
            ></Login>
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              errorMessage={errorMessage}
            ></Register>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer></Footer>
        <Menu menuOpen={menuOpen} handleMenu={handleMenuClosed}></Menu>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
