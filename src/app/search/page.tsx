import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";

import { useEffect, useState } from "react";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { getSearchSection } from "@/lib/api/get-search-value";

import { Genres } from "@/components/Genresss/Genre";
import { Movie } from "@/types";


const SearchMoviePage = () => {
  const [searchResults, setSearchResults] = useState<{
    results: Movie[];
    total_pages: number;
  }>({
    results: [],
    total_pages: 0,
  });

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getSearchSection(page);

      setSearchResults(data);
      setTotalPages(data?.total_pages ?? 0);
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

  return (
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <div className="flex flex-col md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">Search results </h1>
        <div>
          <Genres />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {searchResults?.results?.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} id={movie.id} />
            ))}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {paginations.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={pageNumber === page}
                  onClick={() => handleSelectPage(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => handleSelectPage(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </div>
  );
};

export default SearchMoviePage;
