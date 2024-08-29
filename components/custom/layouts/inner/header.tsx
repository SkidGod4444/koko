import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { IconCarambola, IconCoin, IconMessage2, IconSearch, IconWallet } from "@tabler/icons-react";
import Logo from "../../logo";
import { Input } from "@/components/ui/input";

export default function IHeader() {
  return (
    <header className="relative top-0 flex min-h-[60px] md:min-h-[70px] w-full border-b px-3 py-2 z-50 backdrop-blur-md bg-background/80">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-2">
            <Input placeholder="hehe" value={"0.000000000"}/>
        <Button size={"icon"} className="hidden md:flex items-center justify-center p-2">
        <IconWallet className="size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2 md:gap-5">
          <Button size={"icon"} variant="outline" className="hidden md:inline-flex">
            <IconSearch className="size-5" />
          </Button>
          <Button size={"icon"} variant="outline" className="hidden md:inline-flex">
            <IconMessage2 className="size-5" />
          </Button>
          <Button>
            <IconWallet className="size-5 mr-2" />
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
}
