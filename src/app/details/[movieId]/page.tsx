import { CoverDe } from "@/components/Details/CoverDe";
import { MovieDetail } from "./components/MovieDetail";
import MoreLikeThisPage from "@/app/morelikethis /page";

const Page = async ({ params }: { params: Promise<{ movieId: number }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
      <MovieDetail movieId={movieId} />
      {/* <MoreLikeThisPage /> */}
    </div>
  );
};
export default Page;
