import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommentsAddModel, CommentsDetail } from 'src/app/_models/api/comments';
import { ProductDetail } from 'src/app/_models/api/productDetail';
import { CategoryService } from 'src/app/_services/api/category.service';
import { CommentService } from 'src/app/_services/api/comment.service';
import { ProductService } from 'src/app/_services/api/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  productDetail: ProductDetail = new ProductDetail();
  imagePath: string = '';
  newComment: CommentsAddModel = new CommentsAddModel();
  constructor(private _productService: ProductService, private router: ActivatedRoute, private _commentService: CommentService) {
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
      this.imagePath = this.productDetail.productImages[0].path;
      console.log(x);

    })
  }

  addComment() {
    this.newComment.productId = this.productDetail.id;
    this._commentService.addComment(this.newComment).then(x => {
      console.log(x);
      this.newComment = new CommentsAddModel();
      this.getProductDetail();
    })
  }
}
