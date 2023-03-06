import { useEffect } from "react";
import { Movie } from "../models/Movie";
import { getTrendingMovies } from "../services/TMDBService";

import "./Home.css";
const Home = () => {
  useEffect(() => {
    (async () => {
      const movies: Movie[] = (await getTrendingMovies()).results;
      console.log(movies);
    })();
  }, []);
  return <div className="Home"></div>;
};
export default Home;
