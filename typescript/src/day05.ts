import { readInput } from "./utils";

export const getCrates = (data: string) => {
  const parsedData = data
    .split("\n")
    .map((s) => s.match(/([A-Z])|(\s{4})/g) || [])
    .reverse();

  const crates: string[][] = [];

  for (let i = 0; i < parsedData.length; i++) {
    const row = parsedData[i];
    for (let j = 0; j < row.length; j++) {
      const char = row[j].trim();

      if (crates[j] === undefined) {
        crates[j] = [];
      }
      if (char) {
        crates[j].push(char);
      }
    }
  }

  return crates;
};

export const getMoves = (data: string) => {
  return data
    .split("\n")
    .map((s) => s.match(/(\d{1,})/g)?.map((n) => Number(n)) || []);
};

export const partOne = (crates: string[][], moves: number[][]) => {
  moves.forEach((m) => {
    const numMoves = m[0];
    const startStk = m[1] - 1;
    const endStk = m[2] - 1;
    for (let j = 0; j < numMoves; j++) {
      crates[endStk].push(crates[startStk].pop() || "");
    }
  });

  return crates.map((s) => s.at(-1)).join("");
};

export const partTwo = (crates: string[][], moves: number[][]) => {
  moves.forEach((m) => {
    const numMoves = -m[0];
    const startStk = m[1] - 1;
    const endStk = m[2] - 1;

    crates[endStk]?.push(...crates[startStk]?.slice(numMoves));
    crates[startStk]?.splice(numMoves);
  });

  return crates.map((s) => s.at(-1)).join("");
};

export const dayFive = () => {
  const input = readInput("./src/inputs/day05.txt");

  console.log(
    `Part 1 solution: ${partOne(
      getCrates(input.split("\n\n")[0]),
      getMoves(input.split("\n\n")[1])
    )}`
  );
  console.log(
    `Part 2 solution: ${partTwo(
      getCrates(input.split("\n\n")[0]),
      getMoves(input.split("\n\n")[1])
    )}`
  );
};
