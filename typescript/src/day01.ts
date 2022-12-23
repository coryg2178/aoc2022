import * as fs from "fs";

const max = (x: number, y: number): number => {
  if (x > y) return x;
  return y;
};

// Part 1
fs.readFile(`./src/inputs/day01.txt`, "utf8", (err, data) => {
  if (err) throw err;

  // Convert data to a 2d array of numbers
  const dataArr = data.split("\n\n").map((i) => i.split("\n").map(Number));

  let largest = 0;
  dataArr.forEach((items) => {
    const sum = items.reduce((total, i) => total + i, 0);
    largest = max(largest, sum);
  });

  console.log(largest);
});
