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

  constructor(private productService: ProductService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.items = [];

    this.category = undefined;
    this.categorySubscription = this.router.params.subscribe( params => {
      this.category = params["category"];
      if (this.category)
        this.search('', this.category);
      else
        this.search('', '');
    });

    this.category = this.router?.snapshot?.paramMap?.get('category') ?? '';

    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();

    this.productService.searchSubscribe$.subscribe({
      next: query => {
        console.info("ProductComponent: User searched: ", query);
        this.search(query, this.category ?? '');
      }
    })
  }

  search(query: string, category: string) {
    this.searchBoxSubscription = this.productService.doSearch(query, category).subscribe({
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
}
