const data = require("./data");
const validPassPort = require("./validatePassport");

const mapPassportToObject = (passport) => {
  const matches = passport.match(/(?:byr:|iyr:|eyr:|hgt:|hcl:|ecl:|pid:|)\S+/g);
  return matches.reduce((acc, el) => {
    const [key, value] = el.split(":");
    acc[key] = value;
    return acc;
  }, {});
};

const allPresentAndValidCount = data.reduce((acc, currentPassport) => {
  if (validPassPort(currentPassport)) {
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = mapPassportToObject(currentPassport);
    if (byr.length !== 4 || byr < 1920 || byr > 2002) return acc;
    if (iyr.length !== 4 || iyr < 2010 || iyr > 2020) return acc;
    if (eyr.length !== 4 || eyr < 2020 || eyr > 2030) return acc;

    //  193 <= cm >= 150
    const heightCm = hgt.split("cm");
    if (heightCm.length > 1) {
      // height is in exit if above condition not satisfied
      if (heightCm[0] < 150 || heightCm[0] > 193) return acc;
    } else {
      const heightInches = hgt.replace("in", "");
      if (heightInches < 59 || heightInches > 76) return acc;
    }

    // validate hair color
    if (!hcl.match(/^\#[0-9a-f]{6}$/)) return acc;

    // validate eye color against list
    if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl)) return acc;

    // valid pid is nine-digit number
    if (!pid.match(/^[0-9]{9}$/)) return acc;

    // all valid increment and move on
    return acc + 1;
  }

  return acc;
}, 0);

console.log(allPresentAndValidCount);
