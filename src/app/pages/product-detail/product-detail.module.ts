import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    ProductDetailRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class ProductDetailModule { }
