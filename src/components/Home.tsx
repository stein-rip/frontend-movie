import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import {
	getMovies,
	getMoviesBySearch,
	getTrendingMovies,
} from "../services/TMDBService";

import SearchForm from "./SearchForm";

import "./Home.css";
import { Link, useSearchParams } from "react-router-dom";
import CardList from "./Cardlist";

const Home = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search");
	const genre = searchParams.get("genre");
	const rating = searchParams.get("rating");
	const length = searchParams.get("length");
	useEffect(() => {
		(async () => {
			if (search) {
				const movies: Movie[] = (await getMoviesBySearch(search)).results;
				setMovies(movies);
			} else if (genre || rating || length) {
				const movies: Movie[] = (await getMovies(genre, rating, length))
					.results;
				setMovies(movies);
			} else {
				const movies: Movie[] = (await getTrendingMovies()).results;
				setMovies(movies);
			}
		})();
	}, [genre, rating, length, search]);
	return (
		<div className="Home">
			<SearchForm />
			<Link to="/movies/favorites">
				<button>Favorites</button>
			</Link>
			<Link to="/">
				<button>Home</button>
			</Link>
			<CardList allmovies={movies} />
		</div>
	);
};
export default Home;
