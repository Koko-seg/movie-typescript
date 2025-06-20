import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { getLikeThis } from "@/lib/api/get-like-this";
import { Movie } from "@/types";

export const MoreLikeThis = ({ movieId }: { movieId: number }) => {
  const [likeThis, setLikeThis] = useState<Movie[]>([]);

  useEffect(() => {
    if (!movieId) return;
    const similar = async () => {
      const likeThis = await getLikeThis(movieId);

      const firstTenMovies = likeThis.results?.slice(0, 10);

      setLikeThis(firstTenMovies);
    };
    similar();
  }, [movieId]);

  return (
    <div className="flex flex-col gap-8 p-5 md:px-20 ">
      <div className="flex justify-between md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">More Like This</h1>
        <Link href={`/morelikethis`}>
          <Button variant="ghost">
            See more <ArrowRight className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {likeThis?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
};
