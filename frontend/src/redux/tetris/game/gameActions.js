import _ from "lodash";
import * as actionTypes from "./actionTypes";
import config from "./config";
import { checkCollision } from "./utilityFunctions";
import { TETROMINOS, randomPiece } from "./pieces";

////////////////////////////////////////////////
// ACTIONS THAT GET DISPATCHED TO THE REDUCER //
///////////////////////////////////////////////

// Creates an empty 2D matrix to use as the stage for the game
export const stageCreate = (pieces = TETROMINOS) => {
  let newStage = Array.from(Array(config.stageHeight), () =>
    new Array(config.stageWidth).fill([0, "clear"])
  );

  return {
    type: actionTypes.STAGE_CREATE,
    stage: newStage,
    pieces: pieces,
  };
};

// Gets a random new piece to set as the Next Piece
export const generateNewPiece = (pieces = TETROMINOS) => {
  return {
    type: actionTypes.GENERATE_NEW_PIECE,
    nextPiece: randomPiece(pieces),
  };
};

export const holdPiece = (piece) => {
  return {
    type: actionTypes.HOLD_PIECE,
    heldPiece: piece,
  };
};

export const getHeldPiece = () => {
  return {
    type: actionTypes.GET_HELD_PIECE,
  };
};

// Takes the next piece and sets it as the current player piece
export const setCurrentPiece = (piece) => {
  return {
    type: actionTypes.SET_CURRENT_PIECE,
    currentPiece: piece,
  };
};

// Sets Game Difficulty
export const setDropTime = (difficulty) => {
  return {
    type: actionTypes.SET_DROPTIME,
    dropTime: config.dropTime[difficulty],
  };
};

export const updatePlayerPosition = (positionObj) => {
  return {
    type: actionTypes.UPDATE_PLAYER_POSITION,
    movement: positionObj,
  };
};

export const resetPlayer = () => {
  return {
    type: actionTypes.RESET_PLAYER_POSITION,
    playerPosition: { x: config.stageWidth / 2 - 1, y: 0 },
  };
};

export const redrawStage = () => {
  return {
    type: actionTypes.REDRAW_STAGE,
  };
};

export const sweepRows = () => {
  return {
    type: actionTypes.SWEEP_ROWS,
  };
};

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
  };
};

export const stopGame = () => {
  return {
    type: actionTypes.STOP_GAME,
  };
};

export const collidedTrue = () => {
  return {
    type: actionTypes.COLLISION_DETECTED,
  };
};

export const collidedFalse = () => {
  return {
    type: actionTypes.COLLIDED_FALSE,
  };
};

export const replacePlayerPosition = (playerPosition) => {
  return {
    type: actionTypes.REPLACE_PLAYER_POSITION,
    playerPosition: playerPosition,
  };
};

//////////////////////////////////////
//         ACTIONS YOU CALL         //
//////////////////////////////////////

// Tetris Initial Componen t Mount Setup
export const setupGame = (pieces = undefined) => (dispatch) => {
  dispatch(stageCreate(pieces));
  dispatch(generateNewPiece(pieces));
  dispatch(stopGame());
};

// On Game Start
export const startGameSetup = (
  piece,
  difficulty = "easy",
  pieces = undefined
) => (dispatch) => {
  dispatch(setDropTime(difficulty));
  dispatch(setCurrentPiece(piece));
  dispatch(generateNewPiece(pieces));
  dispatch(resetPlayer());
  dispatch(collidedFalse());
  dispatch(redrawStage());
  dispatch(startGame());
};

export const handleMerge = (gameState, pieces = undefined) => (dispatch) => {
  // Set Collided To True and redraw the stage so that it merges
  dispatch(collidedTrue());
  dispatch(redrawStage());
  // Takes the next piece and sets it as the current player piece
  dispatch(setCurrentPiece(gameState.nextPiece));
  dispatch(generateNewPiece(pieces));
  dispatch(sweepRows());
  dispatch(resetPlayer());
  // Puts the player position back up top and redraws to display
  dispatch(collidedFalse());
  dispatch(redrawStage());
};

// Handles all game inputs
export const handleKeyPress = (key, gameState) => (dispatch) => {
  if (gameState.gameRunning) {
    switch (key) {
      case "left":
      case "right":
        dispatch(movePlayerHorizontal(key, gameState));
        break;
      case "down":
        dispatch(movePlayerDown(gameState));
        break;
      case "up":
      case "e":
        dispatch(rotatePlayer(1, gameState));
        break;
      case "q":
        dispatch(rotatePlayer(-1, gameState));
        break;
      case "space":
        dispatch(hardDrop(gameState));
        break;
      case "v":
        dispatch(handleHeldPiece(gameState));
        break;
      default:
        console.log(`${key} pressed`);
    }
  }
};

//// Player Movement ////
export const movePlayerHorizontal = (key, gameState) => (dispatch) => {
  let movement;
  switch (key) {
    case "left":
      movement = { x: -1, y: 0 };
      break;
    case "right":
      movement = { x: 1, y: 0 };
      break;
    default:
      return;
  }
  if (!checkCollision(gameState, movement)) {
    dispatch(updatePlayerPosition(movement));
    dispatch(redrawStage());
  }
};

export const movePlayerDown = (gameState) => (dispatch) => {
  let movement = { x: 0, y: 1 };
  if (!checkCollision(gameState, movement)) {
    dispatch(updatePlayerPosition(movement));
    dispatch(redrawStage());
  } else {
    // I couldnt find a better way of stopping the game so
    // it stops when a block reaches the top instead of when a block is out of bounds like normal tetris
    if (gameState.playerPosition.y < 1) {
      dispatch(stopGame());
    }
    dispatch(handleMerge(gameState));
  }
};

export const rotatePlayer = (direction, gameState) => (dispatch) => {
  function rotate(piece, dir) {
    // transpose
    let rotated = piece.map((_, index) => piece.map((col) => col[index]));
    if (dir === 1) return rotated.map((row) => row.reverse());
    return rotated.reverse();
  }
  let rotatedPiece = rotate(gameState.currentPiece, direction);
  let copiedPlayerPosition = _.cloneDeep(gameState.playerPosition);

  let pos = copiedPlayerPosition.x;
  let offset = 1;
  while (
    checkCollision(
      gameState,
      { x: 0, y: 0 },
      copiedPlayerPosition,
      rotatedPiece
    )
  ) {
    // Moves the position of the tetromino left and right until it finds a location that isint colliding
    copiedPlayerPosition.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    // resets the tetromino if a position is too far away
    if (offset > rotatedPiece[0].length) {
      rotatedPiece = rotate(rotatedPiece, -direction);
      copiedPlayerPosition.x = pos;
    }
  }
  dispatch(setCurrentPiece(rotatedPiece));
  dispatch(replacePlayerPosition(copiedPlayerPosition));
  dispatch(redrawStage());
  return;
};

export const hardDrop = (gameState) => (dispatch) => {
  let movement = { x: 0, y: 1 };
  while (!checkCollision(gameState, movement)) {
    movement.y += 1;
  }
  movement.y -= 1;
  let newPlayerPosition = _.cloneDeep(gameState.playerPosition);
  newPlayerPosition.y += movement.y;
  dispatch(replacePlayerPosition(newPlayerPosition));
  dispatch(redrawStage());
  // The KeyEventHandler in TetrisLogicWrapper.js moves the piece down one more time which merges it
};

export const handleHeldPiece = (gameState, pieces = undefined) => (
  dispatch
) => {
  if (gameState.heldPiece === null) {
    if (dispatch(handleSwappingPieces(gameState, gameState.nextPiece))) {
      dispatch(holdPiece(gameState.currentPiece));
      dispatch(setCurrentPiece(gameState.nextPiece));
      dispatch(generateNewPiece(pieces));
    }
  } else {
    let heldPiece = _.cloneDeep(gameState.heldPiece);
    if (dispatch(handleSwappingPieces(gameState, heldPiece))) {
      dispatch(holdPiece(gameState.currentPiece));
      dispatch(setCurrentPiece(heldPiece));
      dispatch(handleSwappingPieces(gameState, gameState.heldPiece));
    }
  }
  dispatch(redrawStage());
};

const handleSwappingPieces = (gameState, newCurr) => (dispatch) => {
  let newCurrent = _.cloneDeep(newCurr);
  let copiedPlayerPosition = _.cloneDeep(gameState.playerPosition);
  let pos = copiedPlayerPosition.x;
  let offset = 1;
  while (
    checkCollision(gameState, { x: 0, y: 0 }, copiedPlayerPosition, newCurrent)
  ) {
    // Moves the position of the tetromino left and right until it finds a location that isint colliding
    copiedPlayerPosition.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    // moves the tetromino up if a valid position is too far away
    if (offset > newCurrent[0].length) {
      return false;
    }
  }
  dispatch(replacePlayerPosition(copiedPlayerPosition));
  return true;
};
