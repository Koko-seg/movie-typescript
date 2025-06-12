"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Play } from "lucide-react";
import { getTrailer } from "@/lib/api/get-trailer";
import { Dialog } from "./ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { MovieTrailerProps } from "@/types";

export const Trailer = ({ movieId }: { movieId: number }) => {
  const [trailer, setTrailer] = useState<MovieTrailerProps[]>([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getTrailer(movieId);

        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild className="w-[145px] h-[40px]">
        <Button className="flex gap-[2px] px-[16px] py-[8px] bg-black text-[white] w-fit rounded-[6px] md:bg-white md:text-[black]">
          <Play />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden min-w-[640px] min-h-[360px]">
        <DialogTitle className="sr-only">Movie Trailer</DialogTitle>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <DialogDescription className="sr-only">
              Watch the official trailer of the movie.
            </DialogDescription>
            <YouTube
              videoId={movieTrailer?.key}
              opts={{
                width: 640,
                height: 360,
                playerVars: { autoplay: 1 },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
