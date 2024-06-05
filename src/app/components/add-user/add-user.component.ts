import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      status: ['', Validators.required],
      role: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      employeeId: ['', Validators.required],
      image: ['', Validators.required],
      shortDescription:['']
    });
  }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
