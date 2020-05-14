import React from "react";
import MovieList from "./components/MovieList";
import logo from "./assets/logo.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        <h1>API</h1>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
