import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/api/category';
import { CategoryService } from 'src/app/_services/api/category.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _categoryService: CategoryService) { }
  categories: Category[] = [];
  ngOnInit(): void {
    this._categoryService.getNestedCategories().then(x => {
      this.categories = x as Category[];
      console.log(this.categories);
    })
  }

}
