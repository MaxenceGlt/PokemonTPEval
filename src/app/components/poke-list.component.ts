import { Component } from '@angular/core';
import {mergeMap, tap} from 'rxjs/operators';
import { Pokemon } from '../models';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-poke-list',
  template: `
    <button (click)="nbClickPrecedent()" [ngStyle]="nbOffset == 0 ? {'background-color': 'grey'} : null" [disabled]="nbOffset==0" >Précédent</button>
    <span>{{this.totalPage}}</span>
    <button (click)="nbClickSuivant()">Suivant</button>

    <app-poke-card
      *ngFor="let pokemon of pokemons"
      [pokemon]="pokemon"
    ></app-poke-card>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      margin: 40px auto;
    }
  `]
})
export class PokeListComponent {
  pokemons: Pokemon[] = [];

  nbOffset = 0;
  nbLimit = 10;
  totalPage = 0;
  constructor(
    public pokeService: PokeAPIService
  ) {
    this.getAppelApi();
  }

  getAppelApi(){
    this.pokeService
      .fetchPokemons(this.nbLimit,this.nbOffset)
      .pipe(
        // Transformation sur le flux
        // On transforme chaque valeur (PagedAPIResult<PokemonInfo>) en liste de pokemon (Pokemon[])
        // Merge map nous permet de faire la transformation
        tap(response => this.totalPage = Math.round(response.count/this.nbLimit)),
        mergeMap(pagedResult => this.pokeService.fetchFullPokemonForPage(pagedResult))
      )
      .subscribe(pokemons => this.pokemons = pokemons)
  }
  nbClickSuivant(){
    this.nbOffset = this.nbOffset+10;
    this.getAppelApi();
  }
  nbClickPrecedent(){
    this.nbOffset= this.nbOffset-10;
    this.getAppelApi();
  }
}
