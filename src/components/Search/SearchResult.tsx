import { Movie, Search } from "@/types";
import { SearchResultCard } from "./SearchResultCard";

type SearchResultsProps = {
  movies: Movie[];
  // setSearchValue: React.Dispatch<React.SetStateAction<Search[]>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchResults = ({
  movies,
  setSearchValue,
}: SearchResultsProps) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      {movies &&
        movies
          ?.slice(0, 5)
          .map((movie) => (
            <SearchResultCard
              key={movie.id}
              movie={movie}
              setSearchValue={setSearchValue}
            />
          ))}
    </div>
  );
};
