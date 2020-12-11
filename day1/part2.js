const data = require("./data");
data.sort((a, b) => a - b);

const _2020Triplet = [];

for (let i = 0; i < data.length; i++) {
  if (_2020Triplet.length) break;
  let smallPointer = i + 1;
  let largePointer = data.length - 1;

  const currentValue = data[i];

  while (smallPointer < largePointer) {
    const smallValue = data[smallPointer];
    const largeValue = data[largePointer];

    const sumOfValues = currentValue + smallValue + largeValue;
    if (sumOfValues === 2020) {
      _2020Triplet.push(currentValue, smallValue, largeValue);
      break;
    }
    if (sumOfValues > 2020) {
      // move the large pointer down
      largePointer--;
    } else {
      smallPointer++;
    }
  }
}

if (_2020Triplet.length) {
  const [first, second, third] = _2020Triplet;
  console.log(
    `Found triplet: ${first} | ${second} | ${third}\nProduct is ${first * second * third}`
  );
} else {
  console.log(`Could not find triplet adding to 2020`);
}
