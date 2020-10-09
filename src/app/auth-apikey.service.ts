import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ConstantsService} from './constants.service';
import set = Reflect.set;


@Injectable({
  providedIn: 'root'
  }
)
export class AuthAPIKeyService {

  private isLogged = false;

  constructor(private http: HttpClient, private constService: ConstantsService) {
      const APIKey = localStorage.getItem(this.constService.localStorageKey);
      if (APIKey != null){
        this.isLogged = true;
      }
  }

  setIsLogged(logged: boolean): void{
    this.isLogged = logged;
  }
  getLogged(): boolean{
    return this.isLogged;
  }
  authenticateAPIKey(APIKey: string): void{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', APIKey);
    console.log(headers);
    this.http.get(this.constService.authServerURL, {headers}).subscribe(
      success => this.saveAPIKey(APIKey),
      error => this.handleLoginError(error)
    );
  }
  handleLoginError(error: HttpErrorResponse): void{
    if (error.status === 401){
      console.log(error.message);
    }
  }
  saveAPIKey(APIKey: string): void{
    this.setIsLogged(true);
    localStorage.setItem(this.constService.localStorageKey, APIKey);
  }
}

