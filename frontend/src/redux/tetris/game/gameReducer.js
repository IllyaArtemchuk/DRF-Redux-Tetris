import * as actionTypes from "./actionTypes";
import { updateState } from "../../utility";
import { scoreCalculator } from "./utilityFunctions";

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
  rowsCleared: 0,
  score: 0,
  time: 120,
  chain: 0,
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

const replacePlayerPosition = (state, action) => {
  return updateState(state, {
    playerPosition: action.playerPosition,
  });
};

const resetPlayerPosition = (state, action) => {
  return updateState(state, {
    playerPosition: action.playerPosition,
  });
};

const collidedFalse = (state, action) => {
  return updateState(state, {
    playerCollided: false,
  });
};

const collidedTrue = (state, action) => {
  return updateState(state, {
    playerCollided: true,
  });
};

// The logic for sweeping rows and redrawing the stage is in this file because it already has access to the previous state
const sweepRows = (state, action) => {
  let newRowsCleared = 0;
  let newScore = 0;
  let newChain = 0;

  let newStage = state.stage.reduce((ack, row) => {
    if (row.findIndex((cell) => cell[0] === 0) === -1) {
      newRowsCleared += 1;
      ack.unshift(new Array(state.stage[0].length).fill([0, "clear"]));
      return ack;
    }
    ack.push(row);
    return ack;
  }, []);

  if (newRowsCleared) newScore = scoreCalculator(newRowsCleared, state.chain);
  if (newRowsCleared) newChain = state.chain + 1;

  return updateState(state, {
    stage: newStage,
    rowsCleared: state.rowsCleared + newRowsCleared,
    score: state.score + newScore,
    chain: newChain,
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
    case actionTypes.REPLACE_PLAYER_POSITION:
      return replacePlayerPosition(state, action);
    case actionTypes.REDRAW_STAGE:
      return redrawStage(state, action);
    case actionTypes.SWEEP_ROWS:
      return sweepRows(state, action);
    case actionTypes.COLLISION_DETECTED:
      return collidedTrue(state, action);
    case actionTypes.COLLIDED_FALSE:
      return collidedFalse(state, action);
    default:
      return state;
  }
};

export default gameReducer;
