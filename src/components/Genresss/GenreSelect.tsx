"use client";

import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";

import { getGenreName } from "@/lib/api/get-genre-name";
import { Genre } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const GenreSelect = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Genre[]>([]);

  const [genreIds, setGenreIds] = useState<number[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [genreName, setGenreName] = useState<string[]>([]);

  useEffect(() => {
    setHasMounted(true);
    const fetchGenres = async () => {
      const genreZ = await getGenreName();
      setGenres(genreZ.genres);
    };

    fetchGenres();
  }, []);

  // console.log("mmm", genreIds);

  const handleSelectGenre = (genreId: number, name: string) => {
    const newGenreIds = genreIds?.includes(genreId)
      ? genreIds?.filter((t) => t !== genreId)
      : [...genreIds, genreId];

    setGenreIds(newGenreIds);
    const newNames = genreName?.includes(name)
      ? genreName?.filter((t) => t !== name)
      : [...genreName, name];

    setGenreName(newNames);
    router.push(`/genre?genreIds=${newGenreIds}&name=${newNames}`);
  };
  return (
    <div>
      <DropdownMenuLabel className="font-bold text-[24px]">
        Genres
      </DropdownMenuLabel>
      <DropdownMenuLabel className="pb-5">
        See lists of movies by genre
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <div className="flex flex-wrap gap-3 pt-5 font-bold">
        {hasMounted ? (
          genres.map((genre: Genre) => {
            const isSelected = genreIds?.includes(genre.id);

            return (
              <Button
                key={genre.id}
                variant={isSelected ? "default" : "outline"}
                onClick={() => handleSelectGenre(genre.id, genre.name)}
              >
                {genre?.name} <ChevronRight />
              </Button>
            );
          })
        ) : (
          <div className="text-gray-500">Loading genres...</div>
        )}
      </div>
    </div>
  );
};
