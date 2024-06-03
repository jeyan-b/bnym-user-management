import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { addUser } from '../../user-store/actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    status: '',
    employeeId: '',
    role: '',
    image: '',
  };

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(addUser({ user: this.user }));
    this.user = {
      id: 0,
      name: '',
      email: '',
      lastName: '',
      firstName: '',
      phoneNumber: '',
      status: '',
      employeeId: '',
      role: '',
      image: '',
    }; // reset form
  }
}
