const data = require("./data");

const PASSPORT_CODES = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const isValidPassport = (passport) =>
  PASSPORT_CODES.every((currentCode) => !!passport.match(new RegExp(currentCode, "g")));

const validPassPorts = data.reduce(
  (sum, currentPassport) => (isValidPassport(currentPassport) ? sum + 1 : sum),
  0
);

console.log(validPassPorts, data.length);
