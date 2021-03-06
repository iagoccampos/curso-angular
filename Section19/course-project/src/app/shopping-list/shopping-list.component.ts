import { Component, OnInit, OnDestroy } from '@angular/core'
import { ShoppingListService } from './shopping-list.service'
import { Ingredient } from '../shared/ingredients.model'
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[] = []
	private igChangeSub: Subscription

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.shoppingListService.getIngredients()
		this.igChangeSub = this.shoppingListService.onIngredientAdded
			.subscribe((val: Ingredient[]) => {
				this.ingredients = val
			})
	}

	ngOnDestroy() {
		this.igChangeSub.unsubscribe()
	}

	editItem(index: number) {
		this.shoppingListService.onStartedEditing.next(index)
	}
}
