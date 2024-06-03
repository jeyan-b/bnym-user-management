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
      name: 'Jane Cooper',
      role: 'Regional Paradigm Technician',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
    },
    {
      name: 'Cody Fisher',
      role: 'Product Directives Officer',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
    },
    {
      name: 'Esther Howard',
      role: 'Forward Response Developer',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Central Security Manager',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
    },
    {
      name: 'Kristin Watson',
      role: 'Lead Implementation Liaison',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
    },
    {
      name: 'Cameron Williamson',
      role: 'Internal Applications Engineer',
      image:
        'https://www.bnymellon.com/etc.clientlibs/bnymellon/clientlibs/clientlib-site/resources/images/logos/bny_horizontal_white.svg',
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
