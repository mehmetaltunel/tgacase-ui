import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/api/product';
import { ProductService } from 'src/app/_services/api/product.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private _productService: ProductService, private router: ActivatedRoute) {
    this.getAll();
  }

  getAll() {
    this._productService.getAll().then(x => {
      this.products = x;
    })
  }

  ngOnInit(): void {

  }
}
