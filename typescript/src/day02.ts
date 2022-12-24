import * as fs from "fs";

interface result {
  [index: string]: number;
}

interface strategy {
  [index: string]: result;
}

fs.readFile(`./src/inputs/day02.txt`, "utf8", (err, data) => {
  if (err) throw err;

  // Strategy Guide
  const sg = data
    .trim()
    .split("\n")
    .map((i) => i.split(" "));

  // Part 1 -> X is rock, Y is paper, Z is scissors
  const p1: strategy = {
    A: { X: 4, Y: 8, Z: 3 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 7, Y: 2, Z: 6 },
  };

  console.log(
    `Part 1 solution: ${sg.reduce((acc, i) => acc + p1[i[0]][i[1]], 0)}`
  );

  // Part 2 -> X is lose, Y is draw, Z is win
  const p2: strategy = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
  };

  console.log(
    `Part 1 solution: ${sg.reduce((acc, i) => acc + p2[i[0]][i[1]], 0)}`
  );
});
