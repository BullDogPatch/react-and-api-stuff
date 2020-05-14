import React from "react";

const MovieCard = ({ title, director, releaseDate, desc }) => {
  return (
    <div className="film-list">
      <h2>Film Title: {title}</h2>
      <p>Film Description: {desc}</p>
      <div className="bottom">
        <p>Director: {director}</p>
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
