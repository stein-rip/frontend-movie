import { Link } from "react-router-dom";
import { Movie } from "../models/Movie";
import "./Card.css";

interface Prop {
  movie: Movie;
}
const Card = ({ movie }: Prop) => {
  return (
    <li className="Card">
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>

      <p>{movie.title}</p>
    </li>
  );
};

export default Card;
