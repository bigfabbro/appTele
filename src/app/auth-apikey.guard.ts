import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthAPIKeyService} from './auth-apikey.service';


@Injectable({
  providedIn: 'root'
})
export class AuthAPIKEYGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthAPIKeyService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const Logged = this.authService.getLogged();
    if (Logged){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
