module.exports = (passport) => {
  const PASSPORT_CODES = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  const regex = new RegExp(`(?:${PASSPORT_CODES.join("|")})\\b`, "g");
  const matches = passport.match(regex);
  return matches && PASSPORT_CODES.every((code) => matches.includes(code));
};
