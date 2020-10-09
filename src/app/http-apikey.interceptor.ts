import {ErrorHandler, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthAPIKeyService} from './auth-apikey.service';
import {ConstantsService} from './constants.service';

@Injectable()
export class HTTPAPIKeyInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorHandler: ErrorHandler, private authAPIKeyService: AuthAPIKeyService,
              private constService: ConstantsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const APIKey = localStorage.getItem(this.constService.localStorageKey);
    let clone;
    if (APIKey != null){
       clone = request.clone({setHeaders: {Authorization: APIKey}});
    }
    else {
      clone = request;
    }
    return next.handle(clone).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 401){
          this.authAPIKeyService.setIsLogged(false);
          localStorage.removeItem(this.constService.localStorageKey);
          this.router.navigateByUrl(this.constService.URL401);
        }
        else {
          this.errorHandler.handleError(errorResponse);
        }
        return throwError(errorResponse);
      })
    );
  }
}
