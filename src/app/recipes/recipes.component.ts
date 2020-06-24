import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Recipe } from '../shared/recipes';
=======
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

<<<<<<< HEAD
  recipeItem: Recipe[] =[
    new Recipe('Dosa', 'Dosa is a south indian dish', 'https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
  }

}
