import { Injectable } from '@angular/core';
import {LoginComponent} from '../components/login/login.component';
import {LoggedGuard} from '../guards/logged.guard';
import {AuthAPIKEYGuard} from '../guards/auth-apikey.guard';
import {HomeComponent} from '../components/home/home.component';
import {ProfileComponent} from '../components/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly authServerURL = 'https://httpbin.org/bearer';
  readonly localStorageKey = 'APIKey';
  readonly URL401 = '/login';
  readonly URL403 = '/home';
  readonly homeURL = '/home';
  readonly loginURL = '/login';

  constructor() { }
}
