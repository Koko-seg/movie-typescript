import { MoviesResponse } from "@/types";

export const getSearchSection = async (searchValue: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );

    const search = await response.json();

    return search as MoviesResponse;
  } catch (error) {
    console.log(error);
  }
};
