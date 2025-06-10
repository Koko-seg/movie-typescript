"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";

import Link from "next/link";
import { MovieCardLoading } from "./MovieCardLoading";
import { MovieCard } from "./MovieCard";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movies";
import { Movie } from "@/types";
import { useEffect, useState } from "react";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      const firstTenMovies = upcomingMovies.results?.slice(0, 10);

      setUpcomingMovies(firstTenMovies);
    };
    setLoading(false);
    fetchMovies();
  }, []);
  if (loading) return <MovieCardLoading />;

  return (
    <div>
      <div className="flex flex-col gap-8 p-5 md:px-20 ">
        <div className="flex justify-between md:gap-[32px]">
          <h1 className=" font-semibold text-[black] ">Upcoming</h1>
          <Link href={`/upcoming`}>
            <Button variant="ghost">
              See more <ArrowRight className="w-[16px] h-[16px]" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
