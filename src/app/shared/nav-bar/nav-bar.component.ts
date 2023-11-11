import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  categories:Category[] = [];

  constructor(private categoryService: CategoryService) {
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

}
