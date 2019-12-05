import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'Aspargo', amount: 6 },
    { name: 'Parmesão', amount: 1 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
