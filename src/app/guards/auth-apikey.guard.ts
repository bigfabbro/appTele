import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthAPIKeyService} from '../services/auth-apikey.service';


@Injectable({
  providedIn: 'root'
})
export class AuthAPIKEYGuard implements CanActivateChild {

  constructor(private router: Router, private authService: AuthAPIKeyService) {
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getLogged()){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
