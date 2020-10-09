import {ErrorHandler, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthAPIKeyService} from '../services/auth-apikey.service';
import {ConstantsService} from '../services/constants.service';

@Injectable()
export class HTTPAPIKeyInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorHandler: ErrorHandler, private authAPIKeyService: AuthAPIKeyService,
              private constService: ConstantsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const APIKey = localStorage.getItem(this.constService.localStorageKey);
    const clone = request.clone({setHeaders: {Authorization: `${APIKey}`}});
    return next.handle(clone).pipe(
      tap( event => {
        if (event instanceof HttpResponse){
          if (event.status === 200){
            this.authAPIKeyService.setIsLogged(true);
            this.router.navigateByUrl(this.constService.homeURL);
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401){
            localStorage.removeItem(this.constService.localStorageKey);
            this.authAPIKeyService.setIsLogged(false);
            this.router.navigateByUrl(this.constService.URL401);
          }
        }
        return of(err);
      })
    );
  }
}
