export const checkCollision = (state, movement) => {
  let { currentPiece, stage, playerPosition } = state;
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
