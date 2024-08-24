"use client";
import Bonus from "@/components/custom/home/hero/bonus";
import Hero from "@/components/custom/home/hero/hero";
import KeyFeatures from "@/components/custom/home/hero/key.features";
import Reviews from "@/components/custom/home/hero/reviews";
import Footer from "@/components/custom/layouts/footer";
import { IconAlarm, IconUser } from "@tabler/icons-react";
import { useEffect } from "react";
import { toast } from "sonner";

const generateRandomUserId = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
};

const generateRandomPrize = () => {
  return (Math.random() * (100 - 10) + 10).toFixed(2); // Generates a random amount between $10 and $100
};

const showToast = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString(); // Format date
  const formattedTime = now.toLocaleTimeString(); // Format time

  const userId = generateRandomUserId();
  const prize = generateRandomPrize();

  toast(
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row text-green-600 font-semibold">
        <IconUser className="size-5 mr-2" />
        {userId} won ${prize} in mines game!
      </div>
      <span className="flex flex-row text-gray-500">
        Date: {formattedDate} Time: {formattedTime}
      </span>
    </div>,
  );
};

export default function Home() {
  useEffect(() => {
    const intervalId = setInterval(showToast, 10000); // Show toast every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex h-full w-full px-3 items-center justify-center">
      <div className="flex flex-col mt-5 min-h-screen w-full">
        <Hero />
        <KeyFeatures />
        <Reviews />
        <Bonus />
        <Footer />
      </div>
    </div>
  );
}
