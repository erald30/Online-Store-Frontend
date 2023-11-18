import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, Subscriber} from "rxjs";
import {Product} from "../../models/product";
import {environment} from "../../environments/environment";
import {Filter} from "../../models/filter";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private searchSubscriber: BehaviorSubject<Filter> = new BehaviorSubject<Filter>({brands: [], category: undefined, query: undefined, sale: undefined});
  private filter: Filter = {brands: [], category: undefined, query: undefined, sale: undefined};

  searchSubscribe$ = this.searchSubscriber.asObservable()

  setQuery(query?: string) {
    this.filter.query = query ?? '';
    this.searchSubscriber.next(this.filter);
  }

  setSale(sale: boolean) {
    this.filter.sale = sale;
    this.searchSubscriber.next(this.filter);
  }

  setBrands(brands: string[]) {
    this.filter.brands = brands;
    this.searchSubscriber.next(this.filter);
  }

  setCategory(category?: string) {
    this.filter.category = category ?? '';
    this.searchSubscriber.next(this.filter);
  }

  constructor(private httpClient: HttpClient) { }

  doSearch(): Observable<Product[]> {
    //let finalQuery = query ?  query : '';
    //let finalQuery = query ?? '';

    /*if (query)
      finalQuery = query;
    else
      finalQuery = '';*/
    let requestUrl = "products/search?query=" + (this.filter.query ?? '') +
      "&category="+ (this.filter.category ?? '') +
      "&brands=" + (this.filter.brands && this.filter.brands.length > 0 ? this.filter.brands.join(",") : '') +
      "&sale=" + (this.filter.sale === undefined || !this.filter.sale ? '' : this.filter.sale);
    return this.httpClient.get<Product[]>(environment.apiUrl + requestUrl);
  }

  getNewestProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(environment.apiUrl + "products/new-products");
  }

  getCategory() {
    return this.filter.category;
  }

  getMostSoldProducts() :Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + "products/most-sold-products");
  }
}
