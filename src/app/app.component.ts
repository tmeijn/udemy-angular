import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedPage: ('recipes' | 'shoppingList') = 'recipes';

  onSetSelectedPage(pageName): void {
    this.selectedPage = pageName;
  }
}
