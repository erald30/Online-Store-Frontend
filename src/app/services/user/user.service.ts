import { Injectable } from '@angular/core';
import {User, UserSignIn} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(this.getUser());

  get userSubject$() {
    return this.userSubject.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  login(request: UserSignIn){
    return this.httpClient
      .post<User>(environment.apiUrl + "auth/sign-in", request)
      .pipe(map(result => {
        if(result) {
          this.setUser(result)
          return result;
        }

        throw new Error("Could not login");
      }));
  }

  public setUser(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user))
    this.userSubject.next(user);
  }

  public getUser(): User {
    try{
      return JSON.parse(sessionStorage.getItem("user") || '');
    }
    catch (e) {
      console.error("Could not parse user", e);
    }
    return {};
  }

  clearUser() {
    sessionStorage.removeItem("user");
    this.userSubject.next({});
  }
}
