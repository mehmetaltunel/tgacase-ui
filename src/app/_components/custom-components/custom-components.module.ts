import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductSingleComponent } from './product-single/product-single.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductSingleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductSingleComponent],
  providers: [],
})
export class CustomComponentsModule { }
