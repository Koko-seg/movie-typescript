import { MoviesResponse } from "@/types";

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return data as MoviesResponse;
};
