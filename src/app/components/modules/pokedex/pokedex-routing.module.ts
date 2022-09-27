import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { AddComponent } from './pages/add/add.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { FindComponent } from './pages/find/find.component';
import { ListComponent } from './pages/list/list.component';
import { PokemonResolver } from 'src/app/services/resolvers/pokemon.resolver';

const routes : Routes = [
  {
    path:'',
    //component: PokedexComponent
    children:[
    
      {
        path:'add',
        component: AddComponent
      },
      {
        path:'edit/:id',
        component: PokemonComponent
      },
      {
        path:'find',
        component: FindComponent
      },
      {
        path:'list',
        component: ListComponent
      },
      {
        path:'pokemon/:id',
        component: PokemonComponent,
        resolve: {
          pokemon: PokemonResolver
        }
      },
      {
        path:'',
        component: PokedexComponent,
        pathMatch: 'full'
      },
      {
        path : '**',
        redirectTo: 'list',
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule { }
