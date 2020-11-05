import * as actionTypes from "./actionTypes";
import { updateState } from "../../utility";

const initialState = {
  stage: null,
  dropTime: null,
  pieces: null,
  currentPiece: null,
  nextPiece: null,
  heldPiece: null,
};

const stageCreate = (state, action) => {
  return updateState(state, {
    stage: action.stage,
    pieces: action.pieces,
  });
};

const generateNewPiece = (state, action) => {
  return updateState(state, {
    nextPiece: action.piece,
  });
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STAGE_CREATE:
      return stageCreate(state, action);
    case actionTypes.GENERATE_NEW_PIECE:
      return generateNewPiece(state, action);
    default:
      return state;
  }
};

export default gameReducer;
