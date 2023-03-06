import axios from "axios";
import Movies from "../models/Movies";
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

// export const getMoviesBySearch = async (): Promise<Movies> => {
//   return (await axios.get(baseURL + "/search")).data;
// };
