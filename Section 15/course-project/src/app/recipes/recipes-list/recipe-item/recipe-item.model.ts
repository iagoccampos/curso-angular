import { Ingredient } from 'src/app/shared/ingredients.model';

export interface Recipe {
    name: string
    desc: string
    imgPath: string
    ingredients: Ingredient[]
}
