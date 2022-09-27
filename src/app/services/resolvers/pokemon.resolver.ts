import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<boolean> {

  constructor(private http : HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    const POKEMON_ID : number = route.params['id'];
    const url = `https://pokeapi.co/api/v2/pokemon/${POKEMON_ID}`
    return this.http.get(url);
  }
}
