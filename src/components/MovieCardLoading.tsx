import { Skeleton } from "./ui/skeleton";

export const MovieCardLoading = () => {
  const skeletonCount = 10;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8 p-5 md:px-20">
        <div className="flex justify-between md:gap-[32px]">
          <div className="text-[24px]">
            <Skeleton className="w-[135px] h-[36px]" />
          </div>

          <div className="flex gap-1">
            <Skeleton className="w-[97px] h-[24px]" />
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <Skeleton key={index} className="w-[235px] h-[400px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
