import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      // url: environment.apiUrl uncomment if you want global base url,
      headers:  this.userService.getUser()?.token ? request.headers.set("Authorization", "Bearer " + this.userService.getUser().token) : request.headers
    });



    return next.handle(authReq).pipe(catchError(x => this.handleError(x)));
  }

  private handleError(err: HttpErrorResponse) {
    if (err.status === 401 || err.status === 403) {
      this.userService.clearUser();
      this.router.navigateByUrl("/login")
    }

    return throwError(() => err);
  }
}
