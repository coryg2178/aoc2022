import * as fs from "fs";

fs.readFile(`./src/inputs/day01.txt`, "utf8", (err, data) => {
  if (err) throw err;

  // Convert data to an array
  const arr = data.split("\n\n").map((i) =>
    i
      .split("\n")
      .map(Number)
      .reduce((total, i) => total + i, 0)
  );

  // Part 1
  const largest = Math.max(...arr);

  console.log(`Part 1 solution: ${largest}`);

  // Part 2
  const topThreeSum = arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((current, i) => current + i, 0);

  console.log(`Part 2 solution: ${topThreeSum}`);
});
