import { StepId } from "framer-motion";
import { StringifyOptions } from "querystring";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  page_number: number;
  runtime: string;
  results: string;
  total_results: number;
};

export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  data: string
};

export type Genre = {
  genre: string;
  id: number;
  name: string;
  variant: string;
  genreId: string;
  results: Movie[];
};

export type MovieId = {
  movieId: number;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type MovieTrailerProps = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};
export type StaffInfo = {
  id: number;
  person: string;
  name: string;
  job: string;
  department: string;
  known_for_department: string;
};
export type Search = {
  original_title: string;
  poster_path: string;
  popularity: number;
  release_date: string;
  id: number;
  name?: string;
  // setSearchValue: string;
  results: Search[];
  searchValue: string;
  value: string | number;
};
