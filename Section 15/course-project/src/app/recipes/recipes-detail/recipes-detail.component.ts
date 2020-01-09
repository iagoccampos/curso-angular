import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-list/recipe-item/recipe-item.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-recipes-detail',
    templateUrl: './recipes-detail.component.html',
    styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
    private recipe: Recipe = null

    constructor(private slService: ShoppingListService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe((data: Data) => {
            this.recipe = data['recipe']
        })
    }

    addIngredients(): void {
        this.slService.addMultipleIngredients(this.recipe.ingredients)
    }
}
