import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { increment } from './statistics-actions';

const statistics = createReducer(
  { good: 0, neutral: 0, bad: 0 },
  {
    [increment]: (state, { payload }) => ({
      ...state,
      [payload]: state[payload] + 1,
    }),
  },
);

export default combineReducers({
  statistics,
});
