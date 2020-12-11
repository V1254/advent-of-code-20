const data = require("./data");
module.exports = ({ right, down }) => {
  let treeReadIndex = 0;
  let allowedReadRow = down;
  return data.reduce((acc, currentValue, currentIndex) => {
    // skip the first one
    if (currentIndex !== allowedReadRow) return acc;
    treeReadIndex = (treeReadIndex + right) % currentValue.length; // loop backaround once we hit the edge

    const charAtIndex = currentValue.charAt(treeReadIndex);
    if (charAtIndex === "#") {
      acc++;
    }
    allowedReadRow += down;
    return acc;
  }, 0);
};
