import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/category';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService, private router: Router, private navCtrl: NgxNavigationWithDataComponent) {
    this.categories = this.categoryService.getCategories();
  }

  save(product) {
    console.log(product);
    this.navCtrl.navigate('/admin/products', product);
  }

  ngOnInit(): void {
  }

}
