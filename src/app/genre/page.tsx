"use client";
import { Footer } from "@/components/Footer";
import { GenreSelect } from "@/components/Genresss/GenreSelect";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { getGenreFilter } from "@/lib/api/get-genre-filter";
import { Genre, Movie } from "@/types";
import { useSearchParams } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const GenrePage = () => {
  const search = useSearchParams();
  const genreId = search.get("genreIds");

  const [filterMovie, setFilterMovie] = useState<{ results: Movie[] }>();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    if (!genreId) return;
    const getFilter = async () => {
      const data = await getGenreFilter(genreId, page);
      console.log("genre", data);

      setFilterMovie(data);
    };
    getFilter();
  }, [genreId, page]);

  const handleBackPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="w-full lg:max-w-[1800px] mx-auto flex flex-col gap-y-[32px]">
      <p className="font-semibold text-[30px] pl-20">Search Filter</p>
      <div className="flex mt-8 ">
        <div className=" flex flex-wrap w-[387px] ">
          <GenreSelect />
        </div>
        <div className="sm:border-1 sm:max-h-full sm:mt-32 sm:mx-5"></div>
        <div className="p-5">
          <p> Title </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filterMovie?.results?.map((movie: Movie) => (
              <MovieCard movie={movie} key={movie.id} id={movie.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {page > 1 && <button onClick={handleBackPage}>back</button>}
        <button>{page}</button>
        {500 > page && <button onClick={handleNextPage}>next</button>}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default GenrePage;
