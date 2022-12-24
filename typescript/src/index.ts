import * as fs from "fs";
import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

rl.question(
  "Which day would you like the input from (01 to 25)? ",
  (answer) => {
    fs.readFile(`./src/inputs/day${answer}.txt`, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
);
