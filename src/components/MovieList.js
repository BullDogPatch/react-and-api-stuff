import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        console.log(response.data);
        setFilms(response.data);
      })
      .catch(error => {
        console.log("I have no idea what happened", error);
      });
  }, []);
  return (
    <div className="film">
      {films.map(film => {
        return (
          <MovieCard
            title={film.title}
            desc={film.description}
            director={film.director}
            releaseDate={film.release_date}
          />
        );
      })}
    </div>
  );
}
