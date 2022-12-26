import * as readline from "readline";
import { stdin as input, stdout as output } from "process";
import { runDay } from "./utils";

const rl = readline.createInterface({ input, output });

rl.question(
  "Which day would you like the input from (01 to 25)? ",
  (answer) => {
    runDay(answer);
  }
);
