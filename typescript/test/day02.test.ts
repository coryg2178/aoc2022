import { partOne, partTwo } from "../src/day02";
import { readInput } from "../src/utils";

const data = readInput("./test/inputs/day02.txt");

test("Day 2 Part 1", () => {
  expect(partOne(data)).toBe(15);
});

test("Day 2 Part 2", () => {
  expect(partTwo(data)).toBe(12);
});
