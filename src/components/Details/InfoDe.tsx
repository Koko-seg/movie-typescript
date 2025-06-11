import { MovieDetails } from "@/types";
import { Button } from "../ui/button";

export const InfoDe = ({ movie }: { movie: MovieDetails }) => {
  const littlePoster = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/${movie?.poster_path}`;
  return (
    <div>
      <div className="flex gap-[20px]">
        <img src={littlePoster} className="h-[148px] md:hidden" />
        <div className="">
          <div className="flex flex-wrap gap-3">
            {movie.genres?.map((genre) => (
              <Button
                key={genre.id}
                variant="outline"
                className="rounded-full "
              >
                {genre.name}
              </Button>
            ))}
          </div>

          <p className="text-[16px] p-[20px]">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};
