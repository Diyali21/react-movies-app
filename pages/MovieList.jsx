import { useState } from "react";
import { Movie } from "../components/Movie";
import { INITIAL_MOVIES } from "../components/INITIAL_MOVIES";

// Smart (Parent)
export function MovieList() {

  const [movies, setMovies] = useState(INITIAL_MOVIES);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = (event) => {
    event.preventDefault(); // Prevent Refesh Behaviour

    // setColors([...colors, color]);
    console.log("addMovie", name, poster);

    const newMovie = {
      name: name,
      poster: poster,
      summary: summary,
      rating: rating,
    };

    // Copy the existing movies + New movie
    setMovies([...movies, newMovie]);
  };


  return (
    <div>
      <form onSubmit={addMovie} className="color-form-container">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name" />
        <input
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster" />

        <input
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating" />

        <input
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary" />

        {/* Task 1.2 Add Box to the List */}
        <button type="submit">➕ Add</button>
      </form>
      <div className="movie-list-container">
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}
