import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { loadUsers, deleteUser, addUser } from '../../user-store/actions';
import { selectAllUsers, selectUserError } from '../../user-store/selectors';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  error$: Observable<any>;
  users = [
    {
      id: 7,
      name: 'tesing',
      firstName: 'Testing',
      lastName: 'oggu',
      email: 'harshatest@gmail.com',
      phoneNumber: '9268890543',
      employeeId: 'EMPID101',
      status: 'active',
      shortDescription:'Dummy Test',
      role: 'Lead Test',
      image: 'https://avatars.githubusercontent.com/u/6?v=4',
    },
    {
      id: 8,
      name: 'tesing',
      firstName: 'harsha',
      lastName: 'oggu',
      email: 'harsha@gmail.com',
      phoneNumber: '9268890543',
      employeeId: 'EMPID101',
      status: 'active',
      shortDescription:'Dummy Test',

      role: 'Lead',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    {
      id: 9,
      name: 'tesing',
      firstName: 'harsha',
      lastName: 'oggu',
      email: 'harsha@gmail.com',
      phoneNumber: '9268890543',
      employeeId: 'EMPID101',
      status: 'active',
      role: 'Lead',
      shortDescription:'Dummy Test',

      image: 'https://avatars.githubusercontent.com/u/2?v=4',
    },
    {
      id: 11,
      name: 'tesing',
      firstName: 'harsha',
      lastName: 'oggu',
      email: 'harsha@gmail.com',
      phoneNumber: '9268890543',
      employeeId: 'EMPID101',
      status: 'active',
      role: 'Lead',
      shortDescription:'Dummy Test',

      image: 'https://avatars.githubusercontent.com/u/3?v=4',
    },
    {
      id: 12,
      name: 'tesing',
      firstName: '123',
      lastName: '123',
      email: '123@gm.com',
      phoneNumber: '123',
      employeeId: '123',
      status: 'Inactive',
      role: '123',
      shortDescription:'Dummy Test',

      image: 'https://avatars.githubusercontent.com/u/4?v=4',
    },
    {
      id: 13,
      name: 'tesing',
      firstName: 'tesing',
      lastName: 'tstaing ',
      email: 'inc@gmail.com',
      phoneNumber: '123123123123',
      employeeId: 'testing',
      status: 'Inactive',
      role: 'led',
      shortDescription:'Dummy Test',
      image: 'https://avatars.githubusercontent.com/u/5?v=4',
    },
  ];

  constructor(private store: Store, public dialog: MatDialog) {
    this.users$ = this.store.pipe(select(selectAllUsers));
    this.error$ = this.store.pipe(select(selectUserError));
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  onDelete(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: { message: 'Are you sure you want to delete this user?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        delete result.id;
        console.log(result);
        this.store.dispatch(addUser({ user: result }));
      }
    });
  }
}
