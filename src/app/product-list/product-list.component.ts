import { IProduct } from './product';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products:IProduct[]=[];
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts()
    .subscribe((data)=>{this.products=data}
    )
  }
  getById(id:number){
    this._productService.getById(id);
  }

}
