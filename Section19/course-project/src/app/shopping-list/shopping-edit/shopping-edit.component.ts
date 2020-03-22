import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { ShoppingListService } from '../shopping-list.service'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { Ingredient } from 'src/app/shared/ingredients.model'

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f', { static: false }) slForm: NgForm
	editMode = false
	subscription: Subscription // Pra se desinscrever quando destruir esse componente
	editItemIndex: number
	editedItem: Ingredient

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit(): void {
		this.subscription = this.shoppingListService.onStartedEditing.subscribe((index: number) => {
			this.editMode = true
			this.editItemIndex = index
			this.editedItem = this.shoppingListService.getIngredient(index)
			this.slForm.setValue({ name: this.editedItem.name, amount: this.editedItem.amount })
		})
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe()
	}

	submit(form: NgForm) {
		const values = form.value
		const ingredient = { name: values.name, amount: values.amount }
		if (this.editMode) {
			this.shoppingListService.editIngredient(this.editItemIndex, ingredient)
		} else {
			this.shoppingListService.addIngredient({ name: values.name, amount: values.amount })
		}

		this.clear()
	}

	clear() {
		this.slForm.reset()
		this.editMode = false
		this.editedItem = null
	}

	delete() {
		this.shoppingListService.removeIngredient(this.editItemIndex)
		this.clear()
	}
}
