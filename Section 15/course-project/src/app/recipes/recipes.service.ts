import { Recipe } from './recipes-list/recipe-item/recipe-item.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {

    private recipes: Recipe[] = [{
        name: 'Recipe Name',
        desc: 'Recipe description',
        imgPath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        ingredients: [{ name: 'Peixe', amount: 1 }]
    },
    {
        name: 'Recipe ADHASKDh',
        desc: 'Rggggggggon',
        imgPath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        ingredients: [{ name: 'Tomate', amount: 2 }]
    }]

    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

    getRecipe(id: number): Recipe {
        return this.recipes.slice()[id]
    }
}