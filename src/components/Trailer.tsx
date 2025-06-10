"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Play } from "lucide-react";
import { getTrailer } from "@/lib/api/get-trailer";
import { Dialog } from "./ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
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
      <DialogContent className=" sm:max-w-[991px] p-0 bg-transparent border-none">
        {/* <div className="relative w-full pt-[56.25%]"> */}
        {/* <div className="absolute top-0 left-0 w-full h-full"> */}
        <YouTube
          videoId={movieTrailer?.key}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: { autoplay: 1 },
          }}
        />
        {/* </div> */}
        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};
