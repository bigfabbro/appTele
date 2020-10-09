import { Injectable } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LoggedGuard} from './logged.guard';
import {AuthAPIKEYGuard} from './auth-apikey.guard';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly authServerURL = 'https://httpbin.org/bearer';
  readonly localStorageKey = 'APIKey';
  readonly URL401 = '/login';
  readonly URL403 = '/home';


  constructor() { }
}
