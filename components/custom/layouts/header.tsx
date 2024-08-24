import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { IconCarambola, IconCoin } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex max-w-full border-b mx-auto px-3 py-2 z-50 bg-white/30 backdrop-blur-md dark:bg-black/30">
      <div className="flex h-full justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 md:gap-5">
        <Button variant="outline" className="hidden md:flex">
          <IconCarambola className="size-5 mr-2 group:hover:text-yellow-500" />{" "}
          Legitimacy
        </Button>
        <Button variant="outline">
          <IconCoin className="size-5 mr-2 hover:text-yellow-500" />
          Claim Bonus
        </Button>
      </div>
    </header>
  );
}
