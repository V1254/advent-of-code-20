const data = require("./data");
const isValidPassport = require("./validatePassport");

const validPassPorts = data.reduce(
  (sum, currentPassport) => (isValidPassport(currentPassport) ? sum + 1 : sum),
  0
);

console.log(validPassPorts, data.length);
