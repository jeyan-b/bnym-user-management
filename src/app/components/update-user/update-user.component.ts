import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { updateUser } from '../../user-store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent {
  userId: number;
  userName: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  employeeId: string;
  status: string;
  role: string;
  image: string;
  constructor(private store: Store) {}

  onUpdateUser() {
    if (
      this.userId &&
      this.firstName &&
      this.lastName &&
      this.userEmail &&
      this.phoneNumber &&
      this.employeeId &&
      this.status
    ) {
      const updatedUser: User = {
        id: this.userId,
        name: `${this.firstName} ${this.lastName}`,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.userEmail,
        phoneNumber: this.phoneNumber,
        employeeId: this.employeeId,
        status: this.status,
        role: this.role,
        image: this.image,
      };
      this.store.dispatch(updateUser({ user: updatedUser }));
    }
  }
}
