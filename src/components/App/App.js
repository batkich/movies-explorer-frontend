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

  function handlePreloaderVisibility() {
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

  function handleGetMovies() {
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

  function handleAuthorize(email, password) {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          Promise.all([MainApi.getInfo(res), MainApi.getAllMovies(res)])
            .then(([userInfo, films]) => {
              setSigned(true);
              localStorage.setItem("filmId", JSON.stringify(1));
              localStorage.setItem("sign", signed);
              history.push("/movies");
              setCurrentUser(userInfo);
              toCorrectArray(films);
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

  function searchMovies(value) {
    setElementVisible(true);
    handleAddButton(false);
    setTimeout(setElementVisible, 1000, false);
    setTimeout(handleAddButton, 1000, value);
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
    handleGetMovies();
    handleAuthorize(email, password);
  }

  function handleUpdateUser(data) {
    setUpdProfile(false);
    setCurrentUser(data);
    setUpdProfile(true);
  }

  function handleSaveMovie(data) {
    const filmId = localStorage.getItem("filmId");
    const newFilmId = Number(filmId) + 1;
    const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    const {
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
    } = data;
    const newData = {
      id: newFilmId,
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
    savedFilms.push(newData);
    localStorage.setItem("savedFilms", JSON.stringify(savedFilms));
    setSavedFilmsArray(savedFilms);
    localStorage.setItem("filmId", JSON.stringify(newFilmId));
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
    const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    addSaveFilmsToStorage(savedFilms);
    setSavedFilmsArray(savedFilms);
  }

  function handleDeleteFilm(id) {
    const savedFilms = JSON.parse(localStorage.getItem("savedFilms"));
    const savedFilmsWithoutDelete = savedFilms.filter((item) => item.id !== id);
    localStorage.setItem("savedFilms", JSON.stringify(savedFilmsWithoutDelete));
    setSavedFilmsArray(savedFilmsWithoutDelete);
  }

  function logOut() {
    const token = localStorage.getItem("token");
    MainApi.getAllMovies(token)
      .then((res) => {
        if (res) {
          res.forEach((item) => {
            if (item !== null) {
              MainApi.deleteMovie(token, item._id).catch((err) => {
                console.log(`Ошибка: ${err}`);
              });
            }
          });
        }
      })
      .then(() => {
        const filmsToSave = JSON.parse(localStorage.getItem("savedFilms"));
        filmsToSave.forEach((item) => {
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
          } = item;
          MainApi.saveMovie(
            token,
            country,
            director,
            duration,
            year,
            description,
            image.url,
            trailerLink,
            thumbnail,
            movieId,
            nameRU,
            nameEN
          ).catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
        });
      })
      .then(() => {
        const userInfo = {
          name: currentUser.name,
          email: currentUser.email,
        };
        MainApi.setProfileInfo(token, userInfo)
          .then((res) => {
            if (res === undefined) {
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
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        localStorage.removeItem("token");
        setSigned(false);
        window.localStorage.clear();
        history.push("/");
      });
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
