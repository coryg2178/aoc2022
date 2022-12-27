import { readInput } from "./utils";

const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const partOne = (data: string[]) => {
  let total = 0;

  data.forEach((rs) => {
    const c1 = rs.slice(0, rs.length / 2);
    const c2 = rs.slice(rs.length / 2, rs.length);

    const inter = [...c1].filter((ch) => c2.includes(ch))[0];

    total += priority.indexOf(inter) + 1;
  });

  return total;
};

export const partTwo = (data: string[]) => {
  let total = 0;

  for (let i = 0; i < data.length; i += 3) {
    const chunk = data.slice(i, i + 3);

    const inter = [...chunk[0]].filter(
      (ch) => chunk[1].includes(ch) && chunk[2].includes(ch)
    )[0];

    total += priority.indexOf(inter) + 1;
  }

  return total;
};

export const dayThree = () => {
  const input = readInput("./src/inputs/day03.txt").split("\n");

  console.log(`Part 1 solution: ${partOne(input)}`);
  console.log(`Part 2 solution: ${partTwo(input)}`);
};
