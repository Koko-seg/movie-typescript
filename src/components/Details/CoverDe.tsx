import { Star, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Trailer } from "../Trailer";
import { Movie, MovieDetails } from "@/types";

export const CoverDe = ({
  movieId,
  movie,
}: {
  movieId: number;
  movie: MovieDetails;
}) => {
  const posterUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/${movie?.poster_path}`;
  const backgroundUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/${movie?.backdrop_path}`;

  return (
    <div className="relative">
      <div className=" flex  justify-between">
        <div className="flex flex-col pl-[20px]">
          <p className="text-[24px] md:text-[18px] font-semibold text-[black] ]">
            {movie?.title}
          </p>
          <p className="font-medium text-[#09090B]">
            {movie.release_date} · PG · {movie?.runtime}m
          </p>
        </div>
        <div className="flex gap-[4px] p-[8px] items-center">
          <div className="flex flex-col">
            <p className="text-[12px]">Rating</p>
            <div className="flex flex-row">
              <Star className=" text-yellow-300 fill-amber-300 w-[28px] h-[28px]" />
              <p className="text-[16px]  font-semibold text-[black] ">
                {movie?.vote_average?.toFixed(1)}
              </p>
              <p className="font-medium text-[12px]text-[#09090B]">/10</p>
            </div>
            <p className="font-medium text-[12px] text-[#71717A]">
              {movie?.vote_count}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[32px]">
        <img
          src={posterUrl}
          className="hidden sm:flex min-h-[246px] md:max-h-[600px] "
        />
        <div className="flex relative">
          <img
            src={backgroundUrl}
            className="w-screen min-h-[246px] md:max-h-[600px] md:relative object-cover lg:object-top"
          />
          <div className="absolute flex items-center top-[80%] pl-[12px] text-[white] gap-[8px]">
            <Trailer movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};
