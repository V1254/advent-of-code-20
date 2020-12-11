const { slopes } = require("./slopes");
const calculateTreeCollisions = require("./calculateTreeCollisions");

const treeCollisionProduct = slopes.reduce(
  (acc, current) => acc * calculateTreeCollisions(current),
  1
);

console.log(treeCollisionProduct); // 3517401300
