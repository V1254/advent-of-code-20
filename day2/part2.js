const data = require("./data");
const count = data.reduce((acc, current) => {
  const [policy, password] = current.split(": ");
  const [positions, character] = policy.split(/\s/);
  const [minPosition, maxPosition] = positions.split("-");

  const charAtMinPosition = password.charAt(minPosition - 1);
  const charAtMaxPosition = password.charAt(maxPosition - 1);

  const isValid =
    (charAtMinPosition === character && charAtMaxPosition !== character) ||
    (charAtMaxPosition === character && charAtMinPosition !== character);

  if (isValid) {
    acc++;
  }
  return acc;
}, 0);

console.log(count);
