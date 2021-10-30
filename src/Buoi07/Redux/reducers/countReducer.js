import {COUNT_UP, COUNT_DOWN, UPDATE_USERNAME} from '../actions/countAction';

const initState = {
  number: 0,
  userName: 'Diep Kinh',
};

const countReducer = (state = initState, action) => {
  console.log('action:', action);
  //   có 2 cách xử lý trả về, để tránh được vùng nhớ của object
  switch (action.type) {
    case COUNT_UP:
      state.number += 1;
      return {...state};

    case COUNT_DOWN:
      return {...state, number: (state.number -= 1)};

    case 'RESET':
      return {number: 0};

    default:
      return state;
  }
};

export default countReducer;
