import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { Movie } from "../models/Movie";
import "./Card.css";

interface Prop {
  movie: Movie;
}
const Card = ({ movie }: Prop) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  return (
    <li className="Card">
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      {isFav(movie.id) ? (
        <button onClick={() => deleteFavoriteHandler(movie.id)}>
          Delete Favorite
        </button>
      ) : (
        <button
          onClick={() =>
            addFavoriteHandler({
              movie,
            })
          }
        >
          Add Favorite
        </button>
      )}
      <p>{movie.title}</p>
    </li>
  );
};

export default Card;
