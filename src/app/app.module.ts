import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserService } from './services/user.service';
import { UserEffects } from './user-store/effects';
import { userReducer } from './user-store/reducer';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserComponent } from './components/user/user.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamInfoDetailComponent } from './components/team-info-detail/team-info-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamInfoComponent,
    TeamInfoDetailComponent,
    UsersListComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ConfirmDialogComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [UserService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
