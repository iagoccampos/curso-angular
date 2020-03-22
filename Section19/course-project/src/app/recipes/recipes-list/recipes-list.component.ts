import { Component, OnInit, OnDestroy } from '@angular/core'
import { Recipe } from './recipe-item/recipe-item.model'
import { RecipesService } from '../recipes.service'
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-recipes-list',
	templateUrl: './recipes-list.component.html',
	styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
	subscription: Subscription

	recipes: Recipe[] = []

	constructor(private recipesService: RecipesService) { }

	ngOnInit(): void {
		this.subscription = this.recipesService.onRecipeChange.subscribe((recipes: Recipe[]) => {
			this.recipes = recipes
		})

		this.recipes = this.recipesService.getRecipes()
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe()
	}
}
