import { useState } from "react";

// Presentation

export function Movie({ poster, name, rating, summary }) {
  const ratingStyle = { color: rating >= 8.5 ? "green" : "red" };

  const [show, setShow] = useState(true);

  const summaryStyles = {
    display: show ? "block" : "none"
  };

  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{name}</h2>
          <p style={ratingStyle} className="movie-rating">
            ⭐ {rating}
          </p>
        </div>
        <button onClick={() => setShow((!show))}>Toggle Summary</button>
        {/* <p>{show + ""}</p> */}
        {/* Conditional Rendering - not recommended */}
        {show ? <p style={summaryStyles} className="movie-summary">{summary}</p> : ""}
      </div>
    </div>
  );
}
