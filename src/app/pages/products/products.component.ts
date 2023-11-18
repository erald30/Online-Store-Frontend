import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product/product.service";
import {query} from "@angular/animations";
import {Observable, Subscription, take} from "rxjs";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
  items?: Product[]
  searchBoxSubscription?: Subscription;
  categorySubscription?: Subscription;
  category?: string;

  constructor(private productService: ProductService, private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.items = [];

    this.category = this.productService.getCategory();

    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();

    this.searchBoxSubscription = this.productService.searchSubscribe$.subscribe({
      next: query => {
        this.search();
        this.category = this.productService.getCategory();
      }
    })
  }

  search() {
    this.productService.doSearch().subscribe({
      next: items => {
        this.items = items;
        console.info("success result", items);
      },
      error: err => {
        console.error(err);
      }
    })
  }

  ngOnDestroy(): void {
    if(this.searchBoxSubscription) {
      this.searchBoxSubscription.unsubscribe();
      this.searchBoxSubscription = undefined;
    }
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe()
      this.categorySubscription = undefined;
    }
  }

  clearCategory() {
    this.productService.setCategory(undefined);
  }
}
