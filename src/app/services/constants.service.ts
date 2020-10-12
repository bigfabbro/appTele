import { Injectable } from '@angular/core';

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
