import { NgModule } from '@angular/core';
import { CustomComponentsModule } from 'src/app/_components/custom-components/custom-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CustomComponentsModule,
    CommonModule
  ],
  providers: [],
})
export class HomeModule { }
