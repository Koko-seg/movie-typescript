"use client";

import { Footer } from "@/components/Footer";
import { MovCarousel } from "@/components/MovCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full lg:max-w-[1800px] mx-auto">
      <MovCarousel />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
