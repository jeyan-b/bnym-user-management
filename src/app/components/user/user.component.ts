import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { deleteUser, updateUser } from '../../user-store/actions';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user: User;
  constructor(private store: Store, public dialog: MatDialog) {}
  updateUser(user: User) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '800px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(updateUser({ user: result }));
      }
    });
  }
  deleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this user?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(deleteUser({ id: user.id }));
      }
    });
  }
}
