"use client";
import { useState } from "react";

const DiceGame = () => {
  const [result, setResult] = useState<number | null>(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setResult(roll);
  };

  return (
    <div>
      <h1>Dice Game</h1>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={rollDice}>
        Roll the Dice
      </button>
      {result && <p>You rolled: {result}</p>}
    </div>
  );
};

export default DiceGame;
