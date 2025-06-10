"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import { MovieCard } from "./MovieCard";
import Link from "next/link";
import { MovieCardLoading } from "./MovieCardLoading";
import { Movie } from "@/types";
import { getPopularMovies } from "@/lib/api/get-popular-movie";

export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      const firstTenMovies = popularMovies.results?.slice(0, 10);

      setPopularMovies(firstTenMovies);
    };
    fetchMovies();
    setLoading(false);
  }, []);
  if (loading) return <MovieCardLoading />;
  return (
    <div className="flex flex-col gap-8 p-5 md:px-20 ">
      <div className="flex justify-between md:gap-[32px]">
        <h1 className=" font-semibold text-[black] ">Popular</h1>
        <Link href={`/popular`}>
          <Button variant="ghost">
            See more <ArrowRight className="w-[16px] h-[16px]" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {popularMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
