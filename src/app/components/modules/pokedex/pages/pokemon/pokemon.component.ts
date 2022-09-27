import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

public id : number | undefined;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];        
      }
    )

    this.activatedRoute.data.subscribe(
      data => {
        console.log(data['pokemon'].name);
      }
    )
  }

}
