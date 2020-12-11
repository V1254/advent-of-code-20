const data = require("./data");

const PASSPORT_CODES = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const validRegex = /(?:byr|iyr|eyr|hgt|hcl|ecl|pid)\b/g;

const isValidPassport = (passport) =>
  PASSPORT_CODES.every((code) => (passport.match(validRegex) || []).includes(code));

const validPassPorts = data.reduce(
  (sum, currentPassport) => (isValidPassport(currentPassport) ? sum + 1 : sum),
  0
);

console.log(validPassPorts, data.length);
