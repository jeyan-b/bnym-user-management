import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.userForm = this.fb.group({
      id: [data.id, Validators.required],
      name: [`${data.firstName} ${data.lastName}`, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phoneNumber: [data.phoneNumber, Validators.required],
      status: [data.status, Validators.required],
      role: [data.role, Validators.required],
      lastName: [data.lastName, Validators.required],
      firstName: [data.firstName, Validators.required],
      employeeId: [data.employeeId, Validators.required],
      image: [data.image, Validators.required],
      shortDescription:[data.shortDescription]
    });
  }

  ngOnInit(): void {
    this.userForm.get('firstName')?.valueChanges.subscribe((firstName) => {
      this.updateNameField();
    });

    this.userForm.get('lastName')?.valueChanges.subscribe((lastName) => {
      this.updateNameField();
    });
  }
  updateNameField(): void {
    const firstName = this.userForm.get('firstName')?.value; // Using optional chaining
    const lastName = this.userForm.get('lastName')?.value; // Using optional chaining
    if (firstName !== null && lastName !== null) {
      const fullName = `${firstName} ${lastName}`;
      this.userForm.patchValue({ name: fullName });
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
