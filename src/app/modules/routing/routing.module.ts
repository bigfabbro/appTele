import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '../../components/login/login.component';
import {LoggedGuard} from '../../guards/logged.guard';
import {AuthAPIKEYGuard} from '../../guards/auth-apikey.guard';
import {HomeComponent} from '../../components/home/home.component';
import {ProfileComponent} from '../../components/profile/profile.component';


const routes = [{
  path: 'login', component: LoginComponent, canActivate: [LoggedGuard]
},
  {
    path: '', canActivate: [AuthAPIKEYGuard], children: [
      {path: '', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: '**', redirectTo: ''}
    ]
  }];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
