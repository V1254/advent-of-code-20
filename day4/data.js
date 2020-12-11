const fs = require("fs");
const data = fs
  .readFileSync("./input.txt")
  .toString("utf-8")
  .split(/\n\s*\n/);

module.exports = data;
