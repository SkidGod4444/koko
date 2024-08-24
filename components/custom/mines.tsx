import React, { useState } from "react";
import { Button } from "../ui/button";

type Cell = {
  isMine: boolean;
  isRevealed: boolean;
};

const generateGrid = (size: number, minesCount: number): Cell[][] => {
  const grid: Cell[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ isMine: false, isRevealed: false })),
  );

  let placedMines = 0;
  while (placedMines < minesCount) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    if (!grid[row][col].isMine) {
      grid[row][col].isMine = true;
      placedMines++;
    }
  }
  return grid;
};

const MinesGame: React.FC = () => {
  const [grid, setGrid] = useState(generateGrid(5, 5));
  const [gameOver, setGameOver] = useState(false);

  const revealCell = (row: number, col: number) => {
    if (gameOver || grid[row][col].isRevealed) return;

    const newGrid = [...grid];
    newGrid[row][col].isRevealed = true;

    if (newGrid[row][col].isMine) {
      setGameOver(true);
      alert("Game Over! You hit a mine.");
    }

    setGrid(newGrid);
  };

  const resetGame = () => {
    setGrid(generateGrid(5, 5));
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-5 gap-2">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => revealCell(rowIndex, colIndex)}
              className={`w-16 h-16 flex items-center justify-center border rounded ${
                cell.isRevealed
                  ? cell.isMine
                    ? "bg-red-600"
                    : "bg-blue-400"
                  : "bg-gray-200"
              }`}
            >
              {cell.isRevealed && cell.isMine ? "💣" : ""}
              {cell.isRevealed && !cell.isMine ? "💎" : ""}
            </div>
          )),
        )}
      </div>
      <Button className="mt-4" onClick={resetGame}>
        Reset Game
      </Button>
    </div>
  );
};

export default MinesGame;
