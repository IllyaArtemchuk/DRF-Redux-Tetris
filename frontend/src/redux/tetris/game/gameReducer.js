import * as actionTypes from "./actionTypes";
import { updateState } from "../../utility";

const initialState = {
  gameRunning: false,
  stage: null,
  dropTime: null,
  pieces: null,
  currentPiece: null,
  playerPosition: { x: 0, y: 0 },
  playerCollided: false,
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
    nextPiece: action.nextPiece,
  });
};

const setDropTime = (state, action) => {
  return updateState(state, {
    dropTime: action.dropTime,
  });
};

const setCurrentPiece = (state, action) => {
  return updateState(state, {
    currentPiece: action.currentPiece,
  });
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STAGE_CREATE:
      return stageCreate(state, action);
    case actionTypes.GENERATE_NEW_PIECE:
      return generateNewPiece(state, action);
    case actionTypes.SET_DROPTIME:
      return setDropTime(state, action);
    case actionTypes.SET_CURRENT_PIECE:
      return setCurrentPiece(state, action);
    default:
      return state;
  }
};

export default gameReducer;
