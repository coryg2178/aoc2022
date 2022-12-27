import * as fs from "fs";
import { dayOne } from "./day01";
import { dayTwo } from "./day02";
import { dayThree } from "./day03";
import { dayFour } from "./day04";

export const readInput = (file: string) => {
  const data = fs.readFileSync(file, "utf-8");
  return data;
};

export const runDay = (day: string) => {
  switch (day) {
    case "01":
      dayOne();
      break;
    case "02":
      dayTwo();
      break;
    case "03":
      dayThree();
      break;
    case "04":
      dayFour();
      break;
    default:
      console.error(
        `${day} is not a valid day! Must be a number from 01 to 25.`
      );
      break;
  }
};
