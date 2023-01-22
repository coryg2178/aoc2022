import { readInput } from "./utils";

export const getMarker = (data: string[], winSize: number) => {
  let start = 0;

  while (start <= data.length - winSize) {
    const end = start + winSize;
    const arr = data.slice(start, end);

    if (new Set(arr).size == winSize) {
      return end;
    }

    for (const [i, e] of arr.entries()) {
      const next = arr.lastIndexOf(e);
      if (next != -1 && next != i) {
        start += i + 1;
        break;
      }
    }
  }

  return data.length - 1;
};

export const partOne = (data: string[]) => {
  return getMarker(data, 4);
};

export const partTwo = (data: string[]) => {
  return getMarker(data, 14);
};

export const daySix = () => {
  const input = [...readInput("./src/inputs/day06.txt").trim()];

  console.log(`Part 1 solution: ${partOne(input)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
