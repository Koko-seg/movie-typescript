import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { MovieCard } from "@/components/MovieCard";

import { useRouter } from "next/router";
import { useQueryState, parseAsInteger } from "nuqs";
import { getGenreFilter } from "@/lib/api/get-genre-filter";
import { Genre, Movie } from "@/types";
import { number } from "framer-motion";
import { GenreSelect } from "@/components/Genresss/GenreSelect";

const GenrePage = () => {
  const router = useRouter();
  const genreId = router.query.genreIds;

  const [filterMovie, setFilterMovie] = useState<Genre[]>();
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
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px]">
      <Header />
      <p className="font-semibold text-[30px] pl-20">Search Filter</p>
      <div className="flex mt-8 ">
        <div className=" flex flex-wrap w-[387px] ">
          <GenreSelect />
        </div>

        <div className="p-5">
          <p> Title </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filterMovie?.results?.map((movie) => (
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
