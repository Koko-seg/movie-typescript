import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getTopRatedMovies } from "@/lib/api/get-toprated-movies";

import { Movie } from "@/types";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTopRatedMovies(page);

      setTopRatedMovies(data?.results);
      setTotalPages(data?.total_pages);
    };
    fetchMovies();
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSelectPage = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const paginations = new Array(totalPages)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);
  console.log(paginations);

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <div className="flex flex-col md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">Popular</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-8">
          {topRatedMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} id={movie.id} />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {paginations?.map((pageNumber) => {
              return (
                <PaginationItem className="cursor-pointer">
                  <PaginationLink onClick={() => handleSelectPage(pageNumber)}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </div>
  );
};

export default TopRatedPage;
