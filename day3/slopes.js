const genPositions = (right, down) => ({ right, down });

const slopes = [
  genPositions(1, 1),
  genPositions(3, 1),
  genPositions(5, 1),
  genPositions(7, 1),
  genPositions(1, 2),
];

module.exports = {
  slopes,
  R3D1: genPositions(3, 1),
};
