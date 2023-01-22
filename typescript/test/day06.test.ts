import { partOne, partTwo } from "../src/day06";

let input: string[];

test("Day 4, Part 1, Example 1", () => {
  input = [..."mjqjpqmgbljsphdztnvjfqwrcgsmlb"];
  expect(partOne(input)).toBe(7);
});

test("Day 4, Part 2, Example 1", () => {
  input = [..."mjqjpqmgbljsphdztnvjfqwrcgsmlb"];
  expect(partTwo(input)).toBe(19);
});

test("Day 4, Part 1, Example 2", () => {
  input = [..."bvwbjplbgvbhsrlpgdmjqwftvncz"];
  expect(partOne(input)).toBe(5);
});

test("Day 4, Part 2, Example 2", () => {
  input = [..."bvwbjplbgvbhsrlpgdmjqwftvncz"];
  expect(partTwo(input)).toBe(23);
});

test("Day 4, Part 1, Example 3", () => {
  input = [..."nppdvjthqldpwncqszvftbrmjlhg"];
  expect(partOne(input)).toBe(6);
});

test("Day 4, Part 2, Example 3", () => {
  input = [..."nppdvjthqldpwncqszvftbrmjlhg"];
  expect(partTwo(input)).toBe(23);
});

test("Day 4, Part 1, Example 4", () => {
  input = [..."nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"];
  expect(partOne(input)).toBe(10);
});

test("Day 4, Part 2, Example 4", () => {
  input = [..."nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"];
  expect(partTwo(input)).toBe(29);
});

test("Day 4, Part 1, Example 5", () => {
  input = [..."zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];
  expect(partOne(input)).toBe(11);
});

test("Day 4, Part 2, Example 5", () => {
  input = [..."zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];
  expect(partTwo(input)).toBe(26);
});
