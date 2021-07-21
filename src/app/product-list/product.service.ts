import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("/assets/data/products.json");
  }
  getById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>("");
  }
}
