import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {UserSignIn} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserSignIn = {};
  message: string = '';
  loading: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  signIn() {
    if (!this.user.username) {
      this.message = "Please provide your username!"
      return
    }

    if (!this.user.password) {
      this.message = "Please provide your password!"
      return
    }

    this.loading = true;
    this.userService.login(this.user).subscribe({
      next: user => {
        this.router.navigateByUrl("/");
        this.loading = false;
      },
      error: err => {
        const {error} = err;
        this.message = (typeof error === 'string' || error instanceof String) ? error : err.error?.map((o: any) => o.key + ": " + o.value).join(",");
        this.loading = false;
      }
    })
  }
}
