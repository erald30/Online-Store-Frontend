import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {Category} from "../../models/category";
import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  categories:Category[] = [];

  constructor(private router: Router, private categoryService: CategoryService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: items => {
        // Will be called if server returns my list, so 200 code
        this.categories = items
      },
      error: err => {
        // Will be called if server returns an error code 500, 400
        console.error(err);
      }
    })
  }

  filterByCategory(title: string | undefined) {
    this.router.navigateByUrl("/products")
      .finally(() =>  this.productService.setCategory(title));
  }
}
