const fs = require("fs");
const data = fs
  .readFileSync("./input.txt")
  .toString("utf-8")
  .split(/\r?\n/)
  .map((el) => parseInt(el));

module.exports = data;
