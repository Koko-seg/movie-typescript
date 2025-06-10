"use client";

import { Film, Search } from "lucide-react";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import { Genres } from "./Genresss/Genre";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <nav className="flex md:w-full p-[20px] md:justify-between justify-between  items-center">
        <div className="flex justify-center text-[#4338CA] ">
          <Link href={"/"}>
            <Film />
            <b className="text-[16px]">
              <i>MovieZ</i>
            </b>
          </Link>
        </div>

        <div className=" hidden md:flex gap-[12px] flex-row">
          <Genres />
          <div className={cn("relative text-muted-foreground", "w-[379px]")}>
            <Search
              size={16}
              className="absolute -translate-y-1/2 cursor-pointer left-3 top-1/2"
            />

            {/* <SearchHeader /> */}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex md:hidden">
            <Button
              variant="outline"
              className="flex gap-3 "
              onClick={() => setVisible(!visible)}
            >
              <Search />
            </Button>
            <AnimatePresence>
              {visible && (
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute px-4 left-25"
                >
                  <div className="w-full rounded-xl">
                    {/* <SearchHeader searchValue={searchValue} /> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};
