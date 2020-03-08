import { Ingredient } from '../shared/ingredients.model'
import { Subject } from 'rxjs'

export class ShoppingListService {
	onIngredientAdded = new Subject<Ingredient[]>()
	onStartedEditing = new Subject<number>()

	private ingredients: Ingredient[] = []

	getIngredients(): Ingredient[] {
		return this.ingredients.slice()
	}

	getIngredient(index: number) {
		return this.ingredients[index]
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient)
		this.onIngredientAdded.next(this.ingredients.slice())
	}

	addMultipleIngredients(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients)
		this.onIngredientAdded.next(this.ingredients.slice())
	}

	editIngredient(index: number, ingredient: Ingredient) {
		this.ingredients[index] = ingredient
		this.onIngredientAdded.next(this.ingredients.slice())
	}

	removeIngredient(index: number) {
		this.ingredients.splice(index, 1)
		this.onIngredientAdded.next(this.ingredients.slice())
	}
}