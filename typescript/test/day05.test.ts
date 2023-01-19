import { getCrates, getMoves, partOne, partTwo } from "../src/day05";
import { readInput } from "../src/utils";

const data = readInput("./test/inputs/day05.txt");

test("Correct crate stacks", () => {
  expect(getCrates(data).length).toBe(3);
});

test("Day 5, part 1", () => {
  const crates = getCrates(data.split("\n\n")[0]);
  const moves = getMoves(data.split("\n\n")[1]);

  expect(partOne(crates, moves)).toBe("CMZ");
});

test("Day 5, part 2", () => {
  const crates = getCrates(data.split("\n\n")[0]);
  const moves = getMoves(data.split("\n\n")[1]);

  expect(partTwo(crates, moves)).toBe("MCD");
});
