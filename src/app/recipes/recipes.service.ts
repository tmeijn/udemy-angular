import { Ingredient } from './../_shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable:max-line-length
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!', 'https://www.leukerecepten.nl/wp-content/uploads/2017/04/zelfgemaakte-schnitzel.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?', 'https://www.mcdonalds.nl/sites/default/files/produits/110220_beef_800x596.png',
    [
      new Ingredient('Angus Beef', 2),
      new Ingredient('Bun', 2)
    ])
  ];
  private activeRecipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }


  get selectedRecipe() {
    return this.activeRecipe;
  }

  set setRecipe(recipe: Recipe) {
    this.activeRecipe = recipe;
    console.log(recipe);
  }


}


