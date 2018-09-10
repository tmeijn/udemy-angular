import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94bc060b3ea71111a8caeb6e1ace30f0&auto=format&fit=crop&w=1950&q=80'), new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94bc060b3ea71111a8caeb6e1ace30f0&auto=format&fit=crop&w=1950&q=80')
  ];
  private activeRecipe: Recipe;
  constructor() { }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }


  get selectedRecipe() {
    return this.activeRecipe;
  }

  set setRecipe(recipe: Recipe) {
    this.activeRecipe = recipe;
    console.log(recipe);
  }


}


