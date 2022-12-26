import { d1p1, d1p2 } from "../src/day01";
import { readInput } from "../src/utils";

const data = readInput("./test/inputs/day01.txt");

test("Day 1 Part 1", () => {
  expect(d1p1(data)).toBe(24000);
});

test("Day 1 Part 2", () => {
  expect(d1p2(data)).toBe(45000);
});
