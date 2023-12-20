"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-bottom  shadow"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full items-center flex gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
