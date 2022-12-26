import * as fs from "fs";
import { dayOne } from "./day01";

export const readInput = (file: string) => {
  const data = fs.readFileSync(file, "utf-8");
  return data;
};

export const runDay = (day: string) => {
  switch (day) {
    case "01":
      dayOne(String(readInput(`./src/inputs/day01.txt`)));
      break;
    default:
      console.error(
        `${day} is not a valid day! Must be a number from 01 to 25.`
      );
      break;
  }
};
