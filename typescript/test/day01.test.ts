import { partOne, partTwo } from "../src/day01";
import { readInput } from "../src/utils";

const data = readInput("./test/inputs/day01.txt");

test("Day 1 Part 1", () => {
  expect(partOne(data)).toBe(24000);
});

test("Day 1 Part 2", () => {
  expect(partTwo(data)).toBe(45000);
});
