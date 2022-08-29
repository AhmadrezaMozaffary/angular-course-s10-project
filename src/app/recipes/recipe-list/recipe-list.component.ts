import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A delicious food',
      'Iranian / Persian food ',
      'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1400/09/07/1400090712354169924151294.jpg'
    ),
    new Recipe(
      'Steak beef',
      'Medium rare steak beef',
      'https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18672.jpg?w=1380&t=st=1661584012~exp=1661584612~hmac=08370b1836e327c86668631888b00d4341d025417907cea0f79cb207d9fedf7f'
    ),
  ];

  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getRecipeData(recipeData: Recipe) {
    this.selectedRecipe.emit(recipeData)
  }
}
