import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../_shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
  }

  onAddIngredient(ingredient: Ingredient): void {
    this.shoppingList.addIngredient(ingredient);
    this.ingredients = this.shoppingList.getIngredients();
  }

}
