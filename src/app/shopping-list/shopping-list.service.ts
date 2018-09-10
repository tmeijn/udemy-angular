import { Injectable } from '@angular/core';
import { Ingredient } from '../_shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
  new Ingredient('Apples', 5),
    new Ingredient('Lemons', 10)
  ];

  constructor() { }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
  }

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }
}
