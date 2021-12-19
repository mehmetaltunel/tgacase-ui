import { NgModule } from '@angular/core';
import { CustomComponentsModule } from 'src/app/_components/custom-components/custom-components.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CategoryRoutingModule,
    CustomComponentsModule,
    CommonModule
  ],
  providers: [],
})
export class CategoryModule { }
