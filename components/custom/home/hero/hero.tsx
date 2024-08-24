"use client";
import { Globe } from "@/components/anim/globe";
import Particles from "@/components/anim/particles";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex mt-20 mb-5 w-full h-full overflow-hidden py-20 px-5">
      <Particles
        className="absolute inset-0 -z-[50]"
        quantity={200}
        ease={100}
        color={color}
        refresh
      />
      <Globe className="hidden md:block absolute top-0 -right-10 -bottom-80 md:-right-10 md:-bottom-72 -z-50 opacity-80 md:opacity-100" />
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full h-full z-10">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl xl:text-6xl">
            Unlock the Potential of Crypto Gambling
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Koko.fun offers a secure and user-friendly platform for
            cryptocurrency betting and casino gaming.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg">Start Gambling</Button>
            <Button size="lg" variant="outline">
              Terms & Conditions
            </Button>
          </div>
        </div>
        {/* The right column where Globe is already positioned in the background */}
        <div className="relative flex items-center justify-center">
          {/* Right column content here */}
        </div>
      </div>
    </div>
  );
}
