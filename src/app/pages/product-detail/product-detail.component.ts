import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetail } from 'src/app/_models/api/productDetail';
import { CategoryService } from 'src/app/_services/api/category.service';
import { ProductService } from 'src/app/_services/api/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  productDetail: ProductDetail = new ProductDetail();
  constructor(private _productService: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(
      (params: ParamMap) => {
        let id = params.get('id');
        if (id) {
          this.productId = parseInt(id);
          this.getProductDetail();
        }
      }
    );
  }

  ngOnInit(): void {
  }
  getProductDetail() {
    this._productService.getDetailById(this.productId).then(x => {
      this.productDetail = x;
      console.log(x);

    })
  }
}
