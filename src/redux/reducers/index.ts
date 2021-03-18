import { combineReducers } from 'redux';

import radioReducer from './radio/radioReducer';

const rootReducer = combineReducers({
  radio: radioReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
