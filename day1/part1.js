const data = require("./data");

const pairs = new Map();
const _2020Pair = [];
for (const number of data) {
  const remaining = 2020 - number;
  if (pairs.has(remaining)) {
    _2020Pair.push(number, remaining);
    break;
  } else {
    pairs.set(number, remaining);
  }
}

if (_2020Pair.length) {
  const [first, second] = _2020Pair;
  console.log(`found pair: ${first} | ${second}\nProduct is ${first * second}`);
} else {
  console.log(`Could not find any pairs adding up to 2020`);
}
