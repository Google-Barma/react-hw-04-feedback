import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { goodAction, neutralAction, badAction } from './statistics-actions';

const statistics = createReducer(
  { good: 0, neutral: 0, bad: 0 },
  {
    [goodAction]: (state, { payload }) => ({
      good: state.good + payload,
      neutral: state.neutral,
      bad: state.bad,
    }),
    [neutralAction]: (state, { payload }) => ({
      good: state.good,
      neutral: state.neutral + payload,
      bad: state.bad,
    }),
    [badAction]: (state, { payload }) => ({
      good: state.good,
      neutral: state.neutral,
      bad: state.bad + payload,
    }),
  },
);

export default combineReducers({
  statistics,
});
