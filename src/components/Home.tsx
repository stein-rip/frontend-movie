import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies, getTrendingMovies } from "../services/TMDBService";
import CardList from "./Cardlist";
import SearchForm from "./SearchForm";

import "./Home.css";
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams] = useSearchParams();

  const genre = searchParams.get("genre");
  const rating = searchParams.get("rating");
  const length = searchParams.get("length");
  useEffect(() => {
    (async () => {
      if (genre || rating || length) {
        const movies: Movie[] = (await getMovies(genre, rating, length))
          .results;
        setMovies(movies);
      } else {
        const movies: Movie[] = (await getTrendingMovies()).results;
        setMovies(movies);
      }
    })();
  }, [genre, rating, length]);
  return (
    <div className="Home">
      <SearchForm />
      <CardList allmovies={movies} />
    </div>
  );
};
export default Home;
