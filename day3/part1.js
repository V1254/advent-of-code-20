const data = require("./data");
let readIndex = 0;
const collisionCount = data.reduce((acc, currentValue, currentIndex) => {
  // skip the first one
  if (currentIndex === 0) return acc;
  readIndex = (readIndex + 3) % currentValue.length; // loop backaround once we hit the edge
  const charAtIndex = currentValue.charAt(readIndex);
  if (charAtIndex === "#") {
    acc++;
  }

  return acc;
}, 0);

console.log(collisionCount); // 223
