import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-team',
  templateUrl: './pokedex-team.component.html',
  styleUrls: ['./pokedex-team.component.sass']
})
export class PokedexTeamComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
    // Equipos global storage

function equipoPokemon(){

  //gyarados
  let gyarados = {
      fuerza: '30',
      resistencia: '40',
      vida: '200',
      golpeEspecial: 'hidropulso'
  }

  //charizard
  let charizard = {
      fuerza: '25',
      resistencia: '70',
      vida: '180',
      golpeEspecial: 'Llamarada'
  }

  //mewtwo
  let mewtwo = {
      fuerza: '60',
      resistencia: '20',
      vida: '150',
      golpeEspecial: 'control mental'
  }

  //dragonite
  let dragonite = {
      fuerza: '20',
      resistencia: '50',
      vida: '400',
      golpeEspecial: 'golpe ala'
  }

  //zapdos
  let zapdos = {
      fuerza: '40',
      resistencia: '40',
      vida: '160',
      golpeEspecial: 'Electrotrueno'
  }

  //articuno
  let articuno = {
      fuerza: '50',
      resistencia: '45',
      vida: '200',
      golpeEspecial: 'congelacion'
  }

  //Llamados al escena
  localStorage.setItem( 'Primer pokemon' , JSON.stringify( gyarados ))
  localStorage.setItem( 'Segundo pokemon' , JSON.stringify( charizard ))
  localStorage.setItem( 'Tercer pokemon' , JSON.stringify( mewtwo ))
  localStorage.setItem( 'Cuarto pokemon' , JSON.stringify( dragonite ))
  localStorage.setItem( 'Quinto pokemon' , JSON.stringify( zapdos ))
  localStorage.setItem( 'Ultimo pokemon' , JSON.stringify( articuno ))

}

equipoPokemon()
  }

}
