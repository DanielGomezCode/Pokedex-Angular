import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-table',
  templateUrl: './pokedex-table.component.html',
  styleUrls: ['./pokedex-table.component.sass']
})
export class PokedexTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const pokeCard = document.querySelector('[data-poke-card]');
  const pokeName = document.querySelector('[data-poke-name]');
  const pokeImg = document.querySelector('[data-poke-img]') as HTMLElement
  const pokeImgContainer = document.querySelector('[data-poke-img-container]');
  const pokeTypes = document.querySelector('[data-poke-types]');
  const pokeStats = document.querySelector('[data-poke-stats]');
  const pokeId = document.querySelector('[data-poke-id]')


const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}

const searchPokemon = (event: { preventDefault: () => void; target: { pokemon: { value: any; }; }; }) => {
  event.preventDefault();
  const { value } = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
      .then(data => data.json())
      .then(response =>renderPokemonData(response))

}


const renderPokemonData = (data: { sprites?: any; name?: any; id?: any; stats?: any; types?: any; }) => {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;
  
  pokeName!.textContent = data.name;
  pokeImg!.setAttribute('src', sprite);
  pokeId!.textContent = `Nº ${data.id}`;
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
  
}

const setCardColor = (types: { type: { name: string | number; }; }[]) => {
  const colorOne = typeColors[types[0].type.name];
  const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
  pokeImg!.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  pokeImg!.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = (types: any[]) => {
  pokeTypes!.innerHTML = '';
  types.forEach(type => {
      const typeTextElement = document.createElement("div");
      typeTextElement.style.color = typeColors[type.type.name];
      typeTextElement.textContent = type.type.name;
      pokeTypes!.appendChild(typeTextElement);
  });
}

const renderPokemonStats = (stats: any[]) => {
  pokeStats!.innerHTML = '';
  stats.forEach(stat => { 
      const statElement = document.createElement("div");
      const statElementName = document.createElement("div");
      const statElementAmount = document.createElement("div");
      statElementName.textContent = stat.stat.name;
      statElementAmount.textContent = stat.base_stat;
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      pokeStats!.appendChild(statElement);
  });
}

const renderNotFound = () => {
  pokeName!.textContent = 'No encontrado';
  pokeImg!.setAttribute('src', 'poke-shadow.png');
  pokeImg!.style.background =  '#fff';
  pokeTypes!.innerHTML = '';
  pokeStats!.innerHTML = '';
  pokeId!.textContent = '';
}

// Tabla pokemon
const container = document.getElementById("container");
    const pkmNumber = 151;
     
     const fetchPkm = async () => {
         for (let i = 1; i <= pkmNumber; i++) {
             await getPkm(i);
         }
     }
   
     const getPkm = async (id: number) => {
         const url = 
         `https://pokeapi.co/api/v2/pokemon/${id}`;
         const res = await fetch(url);
         const pokemon = await res.json();
         createPokemonCard(pokemon);
     }
   
     fetchPkm();
   
     function createPokemonCard(pokemon:any) {
         let pokemonEl = document.createElement("div");
         pokemonEl.classList.add("pokemones");
         const pokeInnerHtml = `
         <div class= "cartas" style=" 
          background-color: white;
          height: 250px;
          width: 250px;
          padding: 16px;
          border-radius: 50px;
          text-align: center;
          font-family: 'poppins';
          font-weight: 900;
          text-transform: uppercase;
          font-size: 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          ">${pokemon.name}

         <img class= "pkm-images" style="
         height: 60%;
         width: 60%;" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
         
         <div class="type" style="
          font-size: 16px;
         " >Type: ${pokemon.types[0].type.name}</div>
         </div>
         `;
         pokemonEl.innerHTML = pokeInnerHtml;
         container!.appendChild(pokemonEl);
     }    
  }

}


