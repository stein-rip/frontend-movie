import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../models/Movie";

import { getMovieById } from "../services/TMDBService";
import "./Details.css";

const Details = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const id = useParams().id;
  useEffect(() => {
    (async () => {
      const movieDB: Movie = await getMovieById(id!);
      setMovie(movieDB);
    })();
  }, []);
  return (
    <div className="Details">
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <h2>{movie?.title}</h2>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default Details;
