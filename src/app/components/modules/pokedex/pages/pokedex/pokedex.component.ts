import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  public respons:any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const URL = 'https://postman-echo.com/basic-auth';
    this.respons=this.http.get(URL).subscribe(
      res =>{
        console.log(res)
        return res;
      }
    )
  }
}
