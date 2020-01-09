import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    onIngredientAdded = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = []

    getIngredients(): Ingredient[] {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.onIngredientAdded.next(this.ingredients.slice())
    }

    addMultipleIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.onIngredientAdded.next(this.ingredients.slice())
    }
}