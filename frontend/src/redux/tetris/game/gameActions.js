import * as actionTypes from "./actionTypes";
import config from "./config";
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

//////////////////////////////////////
//         ACTIONS YOU CALL         //
//////////////////////////////////////

// Tetris Initial Componen t Mount Setup
export const setupGame = (pieces = undefined) => (dispatch) => {
  dispatch(stageCreate(pieces));
  dispatch(generateNewPiece(pieces));
};

// On Game Start
export const startGame = (piece, difficulty = "easy", pieces = undefined) => (
  dispatch
) => {
  dispatch(setDropTime(difficulty));
  dispatch(setCurrentPiece(piece));
  dispatch(generateNewPiece(pieces));
};

// Takes the nextPiece and makes it the player piece, also generates a new nextPiece
export const setNewPlayerPiece = (nextPiece, pieces = undefined) => (
  dispatch
) => {
  dispatch(setCurrentPiece(nextPiece));
  dispatch(generateNewPiece(pieces));
};

//// Player Movement ////
export const MovePlayer = (positionObj) => (dispatch) => {
  dispatch(updatePlayerPosition(positionObj));
};

//// Alternative? ////

export const HandleMovement = (key) => (dispatch) => {};
