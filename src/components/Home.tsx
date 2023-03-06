import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getTrendingMovies } from "../services/TMDBService";
import CardList from "./Cardlist";
import Form from "./Form";

import "./Home.css";
const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const movies: Movie[] = (await getTrendingMovies()).results;
      setMovies(movies);
    })();
  }, []);
  return (
    <div className="Home">
      <Form />
      <CardList allmovies={movies} />
    </div>
  );
};
export default Home;
