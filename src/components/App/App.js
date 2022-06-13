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
import Login from "../Login/Login.";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import filmsArray from "../../utils/films";
import savedfilmsArray from "../../utils/savedfilms";

function App() {
  const [signed, setSigned] = React.useState(false);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const [deleteButton, setDeleteButton] = React.useState(false);

  const history = useHistory();

  function hadleSigned() {
    setSigned(true);
    history.push("/movies");
  }

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClosed() {
    setMenuOpen(false);
  }

  function handleDeleteButtonOn () {
    setDeleteButton(true);
  }

  function handleDeleteButtonOff () {
    setDeleteButton(false);
  }

  return (
    <div className="content">
      <Header headertype={signed} handleMenu={handleMenuOpen}></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/movies">
          <Movies filmsArray={filmsArray} handleDeleteButton={handleDeleteButtonOff} deleteButton={deleteButton}></Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies savedfilmsArray={savedfilmsArray} handleDeleteButton={handleDeleteButtonOn} deleteButton={deleteButton}></SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/signin">
          <Login signHandler={hadleSigned}></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer></Footer>
      <Menu menuOpen={menuOpen} handleMenu={handleMenuClosed}></Menu>
    </div>
  );
}

export default App;
