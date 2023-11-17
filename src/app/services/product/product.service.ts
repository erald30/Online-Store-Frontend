import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject, Subscriber} from "rxjs";
import {Product} from "../../models/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private searchSubscriber: BehaviorSubject<string> = new BehaviorSubject<string>('');

  searchSubscribe$ = this.searchSubscriber.asObservable()

  setQuery(query?: string) {
    this.searchSubscriber.next(query ?? '');
  }


  constructor(private httpClient: HttpClient) { }

  doSearch(query?: string, category?: string): Observable<Product[]> {

    //let finalQuery = query ?  query : '';
    //let finalQuery = query ?? '';

    /*if (query)
      finalQuery = query;
    else
      finalQuery = '';*/

    return this.httpClient.get<Product[]>(environment.apiUrl + "products/search?query=" + (query ?? '') + "&category="+ (category ?? ''));
  }

  getNewestProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(environment.apiUrl + "products/new-products");
  }
}
