import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeItem: Recipe[] = [
    new Recipe('Dosa', 'Dosa is a south indian dish', 'https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
