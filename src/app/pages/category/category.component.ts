import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/api/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/_services/api/category.service';
import { Category } from 'src/app/_models/api/category';
import { Product } from 'src/app/_models/api/product';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId: number = 0;
  category: Category = new Category();
  products: Product[] = [];
  constructor(private _productService: ProductService, private router: ActivatedRoute, private _categoryService: CategoryService) {
    this.router.paramMap.subscribe(
      (params: ParamMap) => {
        let id = params.get('id');
        if (id) {
          this.categoryId = parseInt(id);
          this.getProductByCategoryId();
          this.getCategory();
        }
      }

    );

  }

  getProductByCategoryId() {
    this._productService.getProductByCategoryId(this.categoryId).then(x => {
      this.products = x;
    })
  }

  getCategory() {
    this._categoryService.getById(this.categoryId).then(x => {
      this.category = x;
    })
  }

  ngOnInit(): void {

  }

}
