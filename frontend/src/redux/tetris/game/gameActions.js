import * as actionTypes from "./actionTypes";
import config from "./config";
import { TETROMINOS, randomPiece } from "./pieces";

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

export const generateNewPiece = (pieces = TETROMINOS) => {
  return {
    type: actionTypes.GENERATE_NEW_PIECE,
    piece: randomPiece(pieces),
  };
};

// Takes the next piece and sets it as the current player piece
export const setCurrentPiece = (piece) => {
  return {
    type: actionTypes.SET_CURRENT_PIECE,
    currentPiece: piece,
  };
};

export const setDropTime = (difficulty) => {
  return {
    type: actionTypes.SET_DROPTIME,
    dropTime: config.dropTime[difficulty],
  };
};

export const startGame = (difficulty = "easy", pieces = undefined) => (
  dispatch
) => {
  dispatch(stageCreate(pieces));
  dispatch(generateNewPiece(pieces));
  dispatch(setDropTime(difficulty));
};

// Takes the nextPiece and makes it the player piece, also generates a new nextPiece
export const setNewPlayerPiece = (nextPiece, pieces = undefined) => (
  dispatch
) => {
  dispatch(setCurrentPiece(nextPiece));
  dispatch(generateNewPiece(pieces));
};
