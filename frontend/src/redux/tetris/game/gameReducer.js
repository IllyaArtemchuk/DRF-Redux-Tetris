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

const startGame = (state, action) => {
  return updateState(state, {
    gameRunning: true,
  });
};

const stopGame = (state, action) => {
  return updateState(state, {
    gameRunning: false,
  });
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

const updatePlayerPosition = (state, action) => {
  return updateState(state, {
    playerPosition: {
      x: (state.playerPosition.x += action.movement.x),
      y: (state.playerPosition.y += action.movement.y),
    },
  });
};

const resetPlayerPosition = (state, action) => {
  return updateState(state, {
    playerPosition: action.playerPosition,
    playerCollided: false,
  });
};

const collidedTrue = (state, action) => {
  return updateState(state, {
    playerCollided: true,
  });
};

const redrawStage = (state, action) => {
  // clears any tetrominos being displayed that are not merged
  let newStage = state.stage.map((row) =>
    row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
  );

  // adds new player tetromino position and merges it if player is collided
  state.currentPiece.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        newStage[y + state.playerPosition.y][x + state.playerPosition.x] = [
          value,
          `${state.playerCollided ? "merged" : "clear"}`,
        ];
      }
    });
  });
  return updateState(state, {
    stage: newStage,
  });
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return startGame(state, action);
    case actionTypes.STOP_GAME:
      return stopGame(state, action);
    case actionTypes.STAGE_CREATE:
      return stageCreate(state, action);
    case actionTypes.GENERATE_NEW_PIECE:
      return generateNewPiece(state, action);
    case actionTypes.SET_DROPTIME:
      return setDropTime(state, action);
    case actionTypes.SET_CURRENT_PIECE:
      return setCurrentPiece(state, action);
    case actionTypes.UPDATE_PLAYER_POSITION:
      return updatePlayerPosition(state, action);
    case actionTypes.RESET_PLAYER_POSITION:
      return resetPlayerPosition(state, action);
    case actionTypes.REDRAW_STAGE:
      return redrawStage(state, action);
    case actionTypes.COLLISION_DETECTED:
      return collidedTrue(state, action);
    default:
      return state;
  }
};

export default gameReducer;
