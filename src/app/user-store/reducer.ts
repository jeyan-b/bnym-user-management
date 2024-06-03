import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './actions';
export interface State {
  users: User[];
  error: any;
}

export const initialState: State = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.addUserFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? user : u)),
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== id),
  })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({ ...state, error }))
);
