import * as fs from "fs";
console.log("Hello");

// const inputFile = "./input.md";
const inputFile = "./input_bak.md";

const saveFile = (data: string, pathOutput: string) => {
  fs.writeFile(pathOutput, data, "utf8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`the file was saved ${pathOutput}`);
    }
  });
};

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("erro");
    return;
  }
  // x.x.
  let x = data.replace(/\s\d+\.\d+\.\s/gi, "\t1. - [ ] ");
  x = x.replace(/\s\d+\.\d+\.\d+\.\s/gi, "\t\t1. - [ ] ");
  x = x.replace(/\s\d+\.\d+\.\d+\.\d+\.\s/gi, "\t\t\t1. - [ ] ");
  console.log(x);

  saveFile(x, "./output.md");
});
