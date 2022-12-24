import * as fs from "fs";

interface result {
  [index: string]: number;
}

interface strategy {
  [index: string]: result;
}

fs.readFile(`./src/inputs/day02.txt`, "utf8", (err, data) => {
  if (err) throw err;

  const arr = data.split("\n").map((i) => i.split(" "));

  // Part 1
  const p1: strategy = {
    A: { X: 4, Y: 8, Z: 3 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 7, Y: 2, Z: 6 },
  };

  console.log(
    `Part 1 solution: ${arr.reduce((acc, i) => acc + p1[i[0]][i[1]], 0)}`
  );
});
