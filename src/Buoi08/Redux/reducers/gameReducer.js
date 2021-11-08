// rxd
import {paper, rock, scissor, player, computer, backgroud} from '../../images';
import {getResultGame} from '../../utils/common';
import {
  CAL_RESULT,
  USER_PLAY,
  USER_RESET,
  USER_SELECT,
} from '../actions/gameAction';

const initialState = {
  playerSelect: {id: 'scissor', image: scissor},
  computerSelect: {id: 'rock', image: rock},
  listSelect: [
    {id: 'scissor', image: scissor},
    {id: 'rock', image: rock},
    {id: 'paper', image: paper},
  ],
  score: 0,
  times: 9,
};

const gameReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case USER_SELECT:
      state.playerSelect = action.payload;
      return {...state};
    case USER_PLAY:
      state.computerSelect = state.listSelect[Math.floor(Math.random() * 3)];
      return {...state};
    case CAL_RESULT:
      const {times, score} = getResultGame(
        state.playerSelect.id,
        state.computerSelect.id,
      );
      state.times += times;
      state.score += score;
      return {...state};
    case USER_RESET:
      return {...initialState};
    default:
      return state;
  }
};

export default gameReducer;
