import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { getSearchSection } from "@/lib/api/get-search-value";
import { SearchResults } from "./SearchResult";
import { Input } from "../ui/input";
import { Movie, } from "@/types";
import Link from "next/link";
import { Search } from "lucide-react";

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getSearchMovies = async () => {
      const data = await getSearchSection(searchValue.toString());
      setMovies(data?.results ?? []);
    };
    getSearchMovies();
  }, [searchValue]);

  return (
    <div className="relative">
      <div className="flex ">
        <Link href={`/search?searchValue=${searchValue}`}>
      <Search className=" h-4 absolute -translate-y-1/2 cursor-pointer  top-1/2"/>
      </Link>
        <Input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className={cn("pl-[38px]", "border-none shadow-none")}
        />
      </div>
      {movies?.length > 0 && (
        <SearchResults movies={movies} setSearchValue={setSearchValue} />
      )}
      {/* <p className="hidden">
        <button> See More Results </button>
      </p> */}
    </div>
  );
};
