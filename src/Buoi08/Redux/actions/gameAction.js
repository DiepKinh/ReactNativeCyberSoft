export const USER_SELECT = 'USER_SELECT';
export const USER_PLAY = 'USER_PLAY';
export const CAL_RESULT = 'CAL_RESULT';
export const USER_RESET = 'USER_RESET';

export const userSelectAction = payload => ({type: USER_SELECT, payload});
export const userPlayAction = () => ({type: USER_PLAY});
export const calResultAction = () => ({type: CAL_RESULT});
export const userResetAction = () => ({type: USER_RESET});
