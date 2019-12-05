import { Component, EventEmitter, Output } from '@angular/core'
import { Recipe } from './recipe-item/recipe-item.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [{
    name: 'Recipe Name', desc: 'Recipe description', imgPath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
  },
  {
    name: 'Recipe ADHASKDh', desc: 'Rggggggggon', imgPath: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
  }]

  @Output() onSelectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  selectRecipe(index: number) {
    this.onSelectedRecipe.emit(this.recipes[index]);
  }
}
