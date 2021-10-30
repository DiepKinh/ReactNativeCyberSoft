import {UPDATE_USER} from '../actions/userAction';

const initState = {
  userName: '',
  address: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      state.userName = action.payload.userName;
      state.address = action.payload.address;

      return {...state};
    case 'RESET':
      return {userName: '', address: ''};

    default:
      return state;
  }
};

export default userReducer;
