import { readInput } from "./utils";

interface result {
  [index: string]: number;
}

interface strategy {
  [index: string]: result;
}

const makeSg = (data: string) => {
  return data
    .trim()
    .split("\n")
    .map((i) => i.split(" "));
};

export const partOne = (data: string) => {
  // Part 1 -> X is rock, Y is paper, Z is scissors
  const guide: strategy = {
    A: { X: 4, Y: 8, Z: 3 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 7, Y: 2, Z: 6 },
  };

  const sg = makeSg(data);

  return sg.reduce((acc, i) => acc + guide[i[0]][i[1]], 0);
};

export const partTwo = (data: string) => {
  // Part 2 -> X is lose, Y is draw, Z is win
  const guide: strategy = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
  };

  const sg = makeSg(data);

  return sg.reduce((acc, i) => acc + guide[i[0]][i[1]], 0);
};

export const dayTwo = () => {
  const input = readInput("./src/inputs/day02.txt");

  console.log(`Part 1 solution: ${partOne(input)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
