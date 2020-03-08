import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { RecipesService } from '../recipes.service'
import { Recipe } from '../recipes-list/recipe-item/recipe-item.model'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number
	isEditing = false
	recipeForm: FormGroup

	constructor(private route: ActivatedRoute, private recipeService: RecipesService, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params['id']
			this.isEditing = params['id'] != null
			this.initForm()
		})
	}

	private initForm() {
		let recipeName = ''
		let recipeImgUrl = ''
		let recipeDescription = ''
		let recipeIngredients = new FormArray([])

		if (this.isEditing) {
			const recipe = this.recipeService.getRecipe(this.id)
			recipeName = recipe.name
			recipeImgUrl = recipe.imgPath
			recipeDescription = recipe.desc

			if (recipe.ingredients.length) {
				for (let ingredient of recipe.ingredients) [
					recipeIngredients.push(new FormGroup({
						'name': new FormControl(ingredient.name, Validators.required),
						'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
					}))
				]
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(recipeImgUrl, Validators.required),
			'description': new FormControl(recipeDescription, Validators.required),
			'ingredients': recipeIngredients
		})
	}

	get controls() { // a getter!
		return (<FormArray>this.recipeForm.get('ingredients')).controls
	}

	addIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
			'name': new FormControl(null, Validators.required),
			'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
		}))
	}

	deleteIngredient(index: number) {
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
	}

	submit() {
		const newRecipe: Recipe = {
			name: this.recipeForm.value['name'],
			imgPath: this.recipeForm.value['imagePath'],
			desc: this.recipeForm.value['description'],
			ingredients: this.recipeForm.value['ingredients']
		}

		if (this.isEditing) {
			this.recipeService.editRecipe(this.id, this.recipeForm.value)
		} else {
			this.recipeService.addRecipe(this.recipeForm.value)
		}

		this.cancel()
	}

	cancel() {
		this.router.navigate(['../'], { relativeTo: this.route })
	}
}
