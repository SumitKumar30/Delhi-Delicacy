import { Component, OnInit } from '@angular/core';
import { FoodItem } from './food.model'; 
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodItem: FoodItem[] =[
    new FoodItem('Dosa', 'Dosa is a south indian dish', 'https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
