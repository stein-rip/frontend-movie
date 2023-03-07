import axios from "axios";
import { Movie } from "../models/Movie";
import TMDBResponse from "../models/TMDBResponse";

const baseURL: string = "https://api.themoviedb.org/3";
const key: string = process.env.REACT_APP_API_KEY || "";
export const getTrendingMovies = async (): Promise<TMDBResponse> => {
  return (
    await axios.get(`${baseURL}/trending/movie/day`, {
      params: { api_key: key, include_adult: false },
    })
  ).data;
};
export const getMovies = async (
  genre: string | null,
  rating: string | null,
  length: string | null
): Promise<TMDBResponse> => {
  const params = {
    api_key: key,
    include_adult: false,
    ...(genre ? { with_genres: parseInt(genre) } : {}),
    ...(rating ? { "vote_average.lte": parseInt(rating) } : {}),
    ...(length ? { "with_runtime.lte": parseInt(length) } : {}),
  };
  return (
    await axios.get(`${baseURL}/discover/movie`, {
      params,
    })
  ).data;
};

export const getMoviesBySearch = async (
  search: string
): Promise<TMDBResponse> => {
  return (
    await axios.get(`${baseURL}/search/movie`, {
      params: { api_key: key, query: search, include_adult: false },
    })
  ).data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  return (
    await axios.get(`${baseURL}/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key, include_adult: false },
    })
  ).data;
};

// export const getMoviesBySearch = async (): Promise<Movies> => {
//   return (await axios.get(baseURL + "/search")).data;
// };
