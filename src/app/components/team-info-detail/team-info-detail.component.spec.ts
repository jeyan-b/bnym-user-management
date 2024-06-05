import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoDetailComponent } from './team-info-detail.component';

describe('UserComponent', () => {
  let component: TeamInfoDetailComponent;
  let fixture: ComponentFixture<TeamInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamInfoDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
