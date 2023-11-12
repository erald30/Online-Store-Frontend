import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query?: string;

  constructor(private router: Router, private productService: ProductService) {
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
}
