import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this._url}/${id}`)
      .pipe(map((product) => new Product(product)));
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this._url).pipe(
      mergeMap((products) => products),
      map((product) => new Product(product)),
      toArray()
    );
  }
}
