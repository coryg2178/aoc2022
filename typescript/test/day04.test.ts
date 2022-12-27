import { partOne, partTwo } from "../src/day04";
import { readInput } from "../src/utils";

const input = readInput("./test/inputs/day04.txt").split("\n");

test("Day 4 Part 1", () => {
  expect(partOne(input)).toBe(2);
});

test("Day 4 Part 2", () => {
  expect(partTwo(input)).toBe(4);
});
