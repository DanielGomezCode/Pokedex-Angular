import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  private API_POKEMONS = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  public getAllPokemones(): Observable<any>{
    return this.http.get(this.API_POKEMONS);
  }

}
