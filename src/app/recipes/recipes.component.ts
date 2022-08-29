import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

import { RecipeService } from '../shared/Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  detailsData: Recipe = new Recipe();

  constructor() {}

  ngOnInit(): void {}

  getItemsData(itemsData: Recipe) {
    this.detailsData = itemsData;
  }
}
