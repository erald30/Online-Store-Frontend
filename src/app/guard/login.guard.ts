import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user/user.service";

export const loginGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.getUser()?.token) {
    router.navigateByUrl("/login")
    return false;
  }

  return true;
};
