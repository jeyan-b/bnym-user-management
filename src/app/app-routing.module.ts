import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},

  {
  path:'home', component:UsersListComponent
},
{
  path:'team', component:TeamInfoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
