import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, convertToParamMap, ParamMap} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product? : Product;

  constructor(private productService :ProductService, private router : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.paramMap.pipe(
      switchMap((params?: ParamMap) => {
        const id = params?.get('id') || '';
        console.log(id)
        return this.productService.getProductById(id);
      })
    ).subscribe({
      next: result => {
        this.product = result;
      },
      error: err => console.error(err)
      });
    }
}
