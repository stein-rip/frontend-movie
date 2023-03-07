import { Movie } from "./Movie";

export default interface Favorite {
  userID?: string;
  _id?: string;
  movie: Movie;
}
