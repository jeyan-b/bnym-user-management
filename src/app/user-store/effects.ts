import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadUsers,
  loadUsersSuccess,
  addUser,
  updateUser,
  deleteUser,
} from './actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError(() => of({ type: '[User API] Users Loaded Error' }))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      mergeMap((action) =>
        this.userService.addUser(action.user).pipe(
          map((user) => ({ type: '[User API] User Added Success', user })),
          catchError(() => of({ type: '[User API] User Add Error' }))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map((user) => ({ type: '[User API] User Updated Success', user })),
          catchError(() => of({ type: '[User API] User Update Error' }))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.id).pipe(
          map(() => ({
            type: '[User API] User Deleted Success',
            id: action.id,
          })),
          catchError(() => of({ type: '[User API] User Delete Error' }))
        )
      )
    )
  );
}
