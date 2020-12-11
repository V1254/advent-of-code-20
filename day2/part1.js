const data = require("./data");
const count = data.reduce((acc, current) => {
  const [policy, password] = current.split(": ");
  const [lengths, character] = policy.split(/\s/);
  const [minOccurs, maxOccurs] = lengths.split("-");

  const matchCount = (password.match(new RegExp(character, "g")) || []).length;
  if (matchCount >= minOccurs && matchCount <= maxOccurs) {
    acc++;
  }
  return acc;
}, 0);

console.log(count);
