import { Ingredient } from './../../_shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

  @Output() addIngredient = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  add(): void {
    const ingredientName = this.nameInputRef.nativeElement.value.trim();
    const ingredientAmount = this.amountInputRef.nativeElement.value.trim();

    // Some validation
    if (!ingredientName || !ingredientAmount) {
      return;
    }

    const ingredient = new Ingredient(ingredientName, +ingredientAmount);

    this.addIngredient.emit(ingredient);

  }



}
