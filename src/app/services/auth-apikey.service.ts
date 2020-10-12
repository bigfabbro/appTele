import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ConstantsService} from './constants.service';
import set = Reflect.set;
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
  }
)
export class AuthAPIKeyService {

  private isLogged = false;

  constructor(private http: HttpClient, private constService: ConstantsService, private router: Router) {
      const APIKey = this.retrieveAPIKey();
      if (APIKey != null){
        this.isLogged = true;
      }
  }

  setIsLogged(logged: boolean): void{
    this.isLogged = logged;
  }

  getLogged(): boolean{
    const APIKey = this.retrieveAPIKey();
    if (APIKey != null){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    return this.isLogged;
  }
  authenticateAPIKey(APIKey: string): void{
    this.saveAPIKey(APIKey);
    this.http.get(this.constService.authServerURL).subscribe();
  }
  saveAPIKey(APIKey: string): void{
    localStorage.setItem(this.constService.localStorageKey, APIKey);
  }
  retrieveAPIKey(): string | null{
   return localStorage.getItem(this.constService.localStorageKey);
  }

  deleteAPIKey(): void {
    localStorage.removeItem(this.constService.localStorageKey);
    this.setIsLogged(false);
  }
}

