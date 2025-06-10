"use client";

import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import Link from "next/link";
import { MovieCardLoading } from "./MovieCardLoading";
import { getTopRatedMovies } from "@/lib/api/get-toprated-movies";
import { Movie } from "@/types";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();
      const firstTenMovies = topRatedMovies.results?.slice(0, 10);

      setTopRatedMovies(firstTenMovies);
    };
    fetchMovies();
    setLoading(false);
  }, []);
  if (loading) return <MovieCardLoading />;
  return (
    <div className="flex flex-col gap-8 p-5 md:px-20 ">
      <div className="flex justify-between md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">TopRated</h1>
        <Link href={`/top_rated`}>
          <Button variant="ghost">
            See more <ArrowRight className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
