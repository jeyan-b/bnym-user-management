import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { deleteUser, updateUser } from '../../user-store/actions';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss',
})
export class TeamInfoComponent {
  teamList = [
    {
      id: 0,
      selected: false,
      firstName: 'Sudharshan ',
      lastName: 'Kumar',
      profileImage: '../assets/img/pic0.jpg',
    },
    {
      id: 1,
      firstName: 'Jeyan Bright',
      selected: false,
      lastName: 'Jeyakumar',
      profileImage: '../assets/img/pic1.jpg',
    },
    {
      id: 2,
      firstName: 'Prakash',
      selected: false,
      lastName: 'Pant',
      profileImage: '../assets/img/pic2.jpg',
    },
    {
      id: 3,
      firstName: 'Venu',
      lastName: 'Beenaveni',
      selected: false,
      profileImage: '../assets/img/pic3.jpg',
    },
    {
      id: 4,
      firstName: 'Amol G',
      selected: false,
      lastName: 'Nasre',
      profileImage: '../assets/img/pic4.jpg',
    },
  ];
  leadInfo = {
    id: 1,
    firstName: 'Sudharshan ',
    lastName: 'Kumar',
    profileImage:
      'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
  };

  member: any;
  selectImage(team: any) {
    this.teamList.forEach((element) => {
      element.selected = false;
    });

    team.selected = true;
    this.member = team;
  }
}
