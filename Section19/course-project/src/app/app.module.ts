import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component'
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component'
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { RecipesService } from './recipes/recipes.service'
import { ShoppingListService } from './shopping-list/shopping-list.service'
import { AppRountingModule } from './app-routing.module'
import { RecipeDetailResolver } from './recipes/recipes-detail/recipe-detail-resolver.service'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { DataStorageService } from './shared/data-storage.service'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RecipesComponent,
		RecipesListComponent,
		RecipesDetailComponent,
		RecipeItemComponent,
		ShoppingListComponent,
		ShoppingEditComponent,
		RecipeStartComponent,
		RecipeEditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRountingModule
	],
	providers: [RecipesService, ShoppingListService, RecipeDetailResolver, DataStorageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
