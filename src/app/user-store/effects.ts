// src/app/store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  loadUsers,
  loadUsersSuccess,
  deleteUser,
  deleteUserSuccess,
  updateUser,
  updateUserSuccess,
} from './actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError(() => of({ type: '[User] Load Users Failed' }))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.id).pipe(
          map(() => deleteUserSuccess({ id: action.id })),
          catchError(() => of({ type: '[User] Delete User Failed' }))
        )
      )
    )
  );

  deleteUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUserSuccess),
      map(() => loadUsers())
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map((user) => updateUserSuccess({ user })),
          catchError(() => of({ type: '[User] Update User Failed' }))
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserSuccess),
      map(() => loadUsers())
    )
  );
}
