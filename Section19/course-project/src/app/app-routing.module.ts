import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component'
import { RecipeDetailResolver } from './recipes/recipes-detail/recipe-detail-resolver.service'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipesDetailComponent, resolve: { recipe: RecipeDetailResolver } },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)
export class AppRountingModule { }