import { createAction } from '@reduxjs/toolkit';

export const goodAction = createAction('statistics/good');
export const neutralAction = createAction('statistics/neutral');
export const badAction = createAction('statistics/bad');
