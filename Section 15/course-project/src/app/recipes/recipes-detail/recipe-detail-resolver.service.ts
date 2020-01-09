import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes-list/recipe-item/recipe-item.model';
import { RecipesService } from '../recipes.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {
    constructor(private recipesService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<Recipe> | Promise<Recipe> | Recipe {
        return this.recipesService.getRecipe(+route.params['id'])
    }
}