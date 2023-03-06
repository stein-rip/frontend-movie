import axios from "axios";
import TMDBResponse from "../models/Movies";

const baseURL: string = "https://api.themoviedb.org/3";
const key: string = process.env.REACT_APP_API_KEY || "";
export const getTrendingMovies = async (): Promise<TMDBResponse> => {
  return (
    await axios.get(`${baseURL}/trending/movie/day`, {
      params: { api_key: key },
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
    ...(genre ? { genre: parseInt(genre) } : {}),
    ...(rating ? { rating: parseInt(rating) } : {}),
    ...(length ? { length: parseInt(length) } : {}),
  };
  return (
    await axios.get(`${baseURL}/discover/movie`, {
      params,
    })
  ).data;
};
// export const getMoviesBySearch = async (): Promise<Movies> => {
//   return (await axios.get(baseURL + "/search")).data;
// };
