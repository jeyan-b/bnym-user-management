import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { deleteUser, updateUser } from '../../user-store/actions';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { TeamInfoService } from '../../services/team-info.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss',
})
export class TeamInfoComponent {
  constructor(private service: TeamInfoService) {}
  teamList = this.service.teamData;
  member: any;
  selectImage(team: any) {
    this.teamList.forEach((element) => {
      element.selected = false;
    });
    team.selected = true;
    this.member = { ...team };
  }
}
