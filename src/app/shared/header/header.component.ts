import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  query?: string;
  user?: User;
  userSubscription?: Subscription;

  constructor(private router: Router, private productService: ProductService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();

    if(this.userSubscription)
      this.userSubscription.unsubscribe();

    this.userSubscription = this.userService.userSubject$.subscribe({
      next: user => {
        this.user = user;
      }
    })
  }

  search() {
    if (!this.query) {
      console.log(this.router.url)
      if (this.router.url !== "/products") {
        alert("Vendosni nje vlere cfaredo per te kerkuar!");
        return
      }
    }

    this.productService.setQuery(this.query);
    this.router.navigateByUrl("/products")
  }

  ngOnDestroy(): void {
    if(this.userSubscription)
      this.userSubscription.unsubscribe();
  }

  logout() {
    this.userService.clearUser()
  }
}
