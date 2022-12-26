import { readInput } from "./utils";

const makeArr = (data: string) => {
  return data.split("\n\n").map((i) =>
    i
      .split("\n")
      .map(Number)
      .reduce((total, i) => total + i, 0)
  );
};

export const partOne = (data: string) => {
  const arr = makeArr(data);
  return Math.max(...arr);
};

export const partTwo = (data: string) => {
  const arr = makeArr(data);
  return arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((current, i) => current + i, 0);
};

export const dayOne = () => {
  const input = readInput("./src/inputs/day01.txt");

  console.log(`Part 1 solution: ${partOne(input)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
