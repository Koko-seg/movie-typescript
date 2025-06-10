"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Movie, MovieDetails } from "@/types";
import { getMovieById } from "@/lib/api/get-movie-by-id";
import { CoverDe } from "@/components/Details/CoverDe";

export const MovieDetail = ({ movieId }: { movieId: number }) => {
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);

      setMovie(data);
    };
    getMovie();
  }, [movieId]);
  return (
    <div className="w-full lg:max-w-[1278px] mx-auto flex flex-col gap-y-[32px] p-[10px]">
      {movie && (
        <>
          <CoverDe movieId={movieId} movie={movie} />
          {/* <InfoDe movie={movie} />
          <Director id={movie.id} />
          <MoreLikeThis movieId={movie.id} /> */}
        </>
      )}
      <Footer />
    </div>
  );
};
