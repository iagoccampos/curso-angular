import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipes-list/recipe-item/recipe-item.model'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service'
import { ActivatedRoute, Data, Params, Router } from '@angular/router'
import { RecipesService } from '../recipes.service'

@Component({
	selector: 'app-recipes-detail',
	templateUrl: './recipes-detail.component.html',
	styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
	private recipe: Recipe = null
	private id: number

	constructor(private slService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.data.subscribe((data: Data) => {
			this.recipe = data['recipe']
		})

		this.route.params.subscribe((params: Params) => {
			this.id = params['id']
		})
	}

	addIngredients(): void {
		this.slService.addMultipleIngredients(this.recipe.ingredients)
	}

	delete() {
		this.recipesService.deleteRecipe(this.id)
		this.router.navigate(['../'])
	}
}
