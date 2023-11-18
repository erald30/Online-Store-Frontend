import { Component } from '@angular/core';
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
   sale: boolean = false;
   brands:string[] = [];

  constructor(private productService: ProductService) {

  }


  updateFilter() {
    this.productService.setSale(this.sale)
  }

  setBrand(value: string) {
    if (this.brands.includes(value)) {
      const index = this.brands.indexOf(value);
      this.brands.splice(index, 1);
    }
    else {
      this.brands.push(value);
    }

    this.productService.setBrands(this.brands)
  }
}
