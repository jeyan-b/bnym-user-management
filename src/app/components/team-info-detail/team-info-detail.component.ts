import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { deleteUser, updateUser } from '../../user-store/actions';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-team-info-detail',
  templateUrl: './team-info-detail.component.html',
  styleUrl: './team-info-detail.component.scss',
})
export class TeamInfoDetailComponent {
  @Input() member: any;
}
