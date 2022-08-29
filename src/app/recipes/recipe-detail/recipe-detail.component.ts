import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/Services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeDetailData') recipeData: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService._recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeData = recipe;
    });
  }
}
