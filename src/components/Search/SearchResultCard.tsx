import { Search } from "@/types";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/router";
import { stringify } from "querystring";

export const SearchResultCard = ({
  movie,
  setSearchValue,
}: {
  movie: Search;
  setSearchValue: React.Dispatch<React.SetStateAction<Search[]>>;
}) => {
  const { original_title, poster_path, popularity, release_date, id } = movie;

  const router = useRouter();

  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${poster_path}`;
  const handleSeeMore = () => {
    setSearchValue([]);
    router.push(`/details/${id}`);
  };

  return (
    <div className="p-3">
      <div className="flex overflow-hidden w-[537px] gap-4 p-2">
        <div>
          <img src={imageUrl} className="w-[67px] h-[100px]" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p>{original_title}</p>
          <p className="flex items-center text-sm">
            <Star />
            <span className="font-semibold">{popularity.toFixed(1)}</span>
            <span className="ml-1 text-gray-500">/10</span>
          </p>
          <div className="flex justify-between w-full">
            <p>{release_date}</p>

            <div onClick={handleSeeMore} className="flex gap-2 cursor-pointer">
              See more
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-full" />
    </div>
  );
};
