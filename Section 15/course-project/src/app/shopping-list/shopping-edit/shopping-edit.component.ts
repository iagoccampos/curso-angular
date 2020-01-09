import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient(name: string, amount: number) {
    this.shoppingListService.addIngredient({ name: name, amount: amount })
  }
}
