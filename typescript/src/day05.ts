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
  for (let i = 0; i < moves.length; i++) {
    const instr = moves[i];
    for (let j = 0; j < instr[0]; j++) {
      const n = crates[instr[1] - 1].pop() || "";
      crates[instr[2] - 1].push(n);
    }
  }

  return crates.map((s) => s.at(-1)).join("");
};

export const partTwo = (data: string) => {
  return "";
};

export const dayFive = () => {
  const input = readInput("./src/inputs/day05.txt");

  const crates = getCrates(input.split("\n\n")[0]);
  const moves = getMoves(input.split("\n\n")[1]);

  console.log(`Part 1 solution: ${partOne(crates, moves)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
