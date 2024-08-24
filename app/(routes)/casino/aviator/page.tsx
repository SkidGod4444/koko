"use client";
import { useState } from "react";

const AviatorGame = () => {
  const [multiplier, setMultiplier] = useState(1);
  const [isFlying, setIsFlying] = useState(false);
  const [cashOut, setCashOut] = useState<number | null>(null);

  const startFlight = () => {
    setIsFlying(true);
    setMultiplier(1);
    setCashOut(null);

    const interval = setInterval(() => {
      setMultiplier((prev) => prev + 0.01);
    }, 100);

    setTimeout(
      () => {
        clearInterval(interval);
        setIsFlying(false);
      },
      Math.random() * 5000 + 2000,
    ); // Random flight duration
  };

  const handleCashOut = () => {
    setCashOut(multiplier);
    setIsFlying(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-4xl font-bold mb-4">
        {isFlying ? `Multiplier: x${multiplier.toFixed(2)}` : "Ready to Fly?"}
      </div>
      <button
        onClick={isFlying ? handleCashOut : startFlight}
        className="px-8 py-4 bg-blue-500 rounded-md hover:bg-blue-700"
        disabled={cashOut !== null}
      >
        {isFlying ? "Cash Out" : "Start Flight"}
      </button>
      {cashOut && (
        <div className="mt-4 text-2xl">
          You cashed out at: x{cashOut.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default AviatorGame;
