import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-mostsoldproducts',
  templateUrl: './mostsoldproducts.component.html',
  styleUrls: ['./mostsoldproducts.component.css']
})
export class MostsoldproductsComponent implements OnInit{

  mostSoldProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getMostSoldProducts().subscribe({
      next: items => {
        this.mostSoldProducts = items;
      },
      error: err => {
        console.error (err) ;
      }
    })
  }



}
