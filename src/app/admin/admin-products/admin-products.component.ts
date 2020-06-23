import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  title:string;
  price:any;
  category:any;
  url:any;
  productArray:[];
  constructor(private navCtrl:NgxNavigationWithDataComponent) {
    console.log(this.navCtrl.data);
    this.title=this.navCtrl.get('title');
    this.price=this.navCtrl.get('price');
    this.category=this.navCtrl.get('category');
    this.url=this.navCtrl.get('imageUrl');
    console.log(this.title,this.category,this.url,this.price);
   }

  ngOnInit(): void {
  }

}
