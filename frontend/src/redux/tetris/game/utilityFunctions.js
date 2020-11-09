export const checkCollision = (
  state,
  movement,
  playerPosition = state.playerPosition,
  currentPiece = state.currentPiece
) => {
  let { stage } = state;
  // loop through currentPiece
  for (let currentY = 0; currentY < currentPiece.length; currentY++) {
    for (let currentX = 0; currentX < currentPiece.length; currentX++) {
      if (currentPiece[currentY][currentX] !== 0) {
        if (
          // Checks if piece is out of bounds
          !stage[currentY + playerPosition.y + movement.y] ||
          !stage[currentY + playerPosition.y + movement.y][
            currentX + playerPosition.x + movement.x
          ] ||
          // Check if piece collided with already merged tetromino
          stage[currentY + playerPosition.y + movement.y][
            currentX + playerPosition.x + movement.x
          ][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const scoreCalculator = (lines, chain) => {
  let lineScores = {
    1: 4,
    2: 10,
    3: 30,
    4: 120,
  };
  let chainMultiplier = {
    0: 1.0,
    1: 1.5,
    2: 2.0,
    3: 4.0,
    4: 8.0,
    5: 12.0,
    6: 20.0,
  };
  if (chain < 7) {
    return lineScores[lines] * chainMultiplier[chain];
  } else {
    return lineScores[lines] * 25.0;
  }
};
