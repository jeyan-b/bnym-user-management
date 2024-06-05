import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-team-info-detail',
  templateUrl: './team-info-detail.component.html',
  styleUrl: './team-info-detail.component.scss',
})
export class TeamInfoDetailComponent {
  @Input() member: any;
}
