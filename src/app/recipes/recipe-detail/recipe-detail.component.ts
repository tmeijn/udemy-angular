import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addToShoppingListHandler() {
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

}
