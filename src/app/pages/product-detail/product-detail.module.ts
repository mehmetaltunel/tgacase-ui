import { NgModule } from '@angular/core';
import {  ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    ProductDetailRoutingModule
  ],
  providers: [],
})
export class ProductDetailModule { }
