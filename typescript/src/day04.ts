import { readInput } from "./utils";

const populate = (thing: string) => {
  const start = Number(thing.split("-")[0]);
  const end = Number(thing.split("-")[1]);

  return [...Array(end - start + 1).keys()].map((i) => i + start);
};

export const partOne = (data: string[]) => {
  let count = 0;

  data.forEach((i) => {
    const arr1 = populate(i.split(",")[0]);
    const arr2 = populate(i.split(",")[1]);

    if (arr1.length > arr2.length) {
      if (arr2.every((elem) => arr1.includes(elem))) {
        count++;
      }
    } else {
      if (arr1.every((elem) => arr2.includes(elem))) {
        count++;
      }
    }
  });

  return count;
};

export const partTwo = (data: string[]) => {
  let count = 0;

  data.forEach((i) => {
    const arr1 = populate(i.split(",")[0]);
    const arr2 = populate(i.split(",")[1]);

    if (arr1.some((elem) => arr2.includes(elem))) {
      count++;
    }
  });

  return count;
};

export const dayFour = () => {
  const input = readInput("./src/inputs/day04.txt").split("\n");

  console.log(`Part 1 solution: ${partOne(input)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
