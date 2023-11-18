import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit{
  newProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getNewestProducts().subscribe({
      next: items => {
        // Will be called if server returns my list, so 200 code
        this.newProducts = items
      },
      error: err => {
        // Will be called if server returns an error code 500, 400
        console.error(err);
      }
    })
  }

}
