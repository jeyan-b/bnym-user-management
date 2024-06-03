import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

export const selectUserState = createFeatureSelector<State>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: State) => state.users
);

export const selectUserError = createSelector(
  selectUserState,
  (state: State) => state.error
);
