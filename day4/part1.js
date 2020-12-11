const data = require("./data");

const PASSPORT_CODES = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const regex = new RegExp(`(?:${PASSPORT_CODES.join("|")})\\b`, "g");
const isValidPassport = (passport) => {
  const matches = passport.match(regex);
  return matches && PASSPORT_CODES.every((code) => matches.includes(code));
};

const validPassPorts = data.reduce(
  (sum, currentPassport) => (isValidPassport(currentPassport) ? sum + 1 : sum),
  0
);

console.log(validPassPorts, data.length);
