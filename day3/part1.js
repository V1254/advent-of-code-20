const data = require("./data");
let readIndex = 0;
let treeCollisionCount = 0;
for (let i = 1; i < data.length; i++) {
  readIndex = (readIndex + 3) % data[i].length;
  const charAtIndex = data[i].charAt(readIndex);
  if (charAtIndex === "#") {
    treeCollisionCount++;
  }
}

console.log(treeCollisionCount); // 223
