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

export const startGame = (pieces = undefined) => (dispatch) => {
  dispatch(stageCreate(pieces));
};
