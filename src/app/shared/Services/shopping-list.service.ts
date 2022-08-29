import { EventEmitter } from '@angular/core';

import { Ingredient } from '../ingredient.mode';

export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredient(ing: Ingredient) {
    this._ingredients.push(ing);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  getIngredients() {
    return this._ingredients.slice();
  }
}
