import { useState } from "react";
import { getMovies } from "../utils/movieService";
import Movie from "./Movie";

const Movies = () => {
  const [movie, setMovie] = useState([]);

  const Clicked = async () => {
    const data = await getMovies();
    setMovie(data);
  };

  return (
    <>
      <button type="button" onClick={Clicked}>
        Button
      </button>

      {movie?.length > 0
        ? movie.map((movie) => <Movie key={movie.slug} {...movie} />)
        : null}
    </>
  );
};

export default Movies;
