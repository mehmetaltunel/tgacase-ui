import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/api/product';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  constructor() { }
  @Input() product: Product = new Product();
  ngOnInit(): void {
  }

}
