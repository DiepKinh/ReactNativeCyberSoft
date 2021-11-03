import {combineReducers, createStore} from 'redux';
import gameReducer from './reducers/gameReducer';

const store = createStore(combineReducers({gameReducer}));

export default store;
