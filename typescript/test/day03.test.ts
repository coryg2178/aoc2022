import { partOne, partTwo } from "../src/day03";
import { readInput } from "../src/utils";

const input = readInput("./test/inputs/day03.txt").split("\n");

test("Day 3 Part 1", () => {
  expect(partOne(input)).toBe(157);
});

test("Day 3 Part 2", () => {
  expect(partTwo(input)).toBe(70);
});
