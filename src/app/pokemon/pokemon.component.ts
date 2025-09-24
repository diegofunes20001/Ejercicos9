import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService, Pokemon } from '../services/pokemon.services';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.services.html',
  styleUrl: './pokemon.services.css'
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.loading = true;
    this.pokemonService.getPokemonList(12, 0).subscribe({
      next: (response) => {
        // Get detailed information for each Pokemon
        const pokemonRequests = response.results.map(pokemon => 
          this.pokemonService.getPokemon(pokemon.name)
        );

        forkJoin(pokemonRequests).subscribe({
          next: (pokemonDetails) => {
            this.pokemonList = pokemonDetails;
            this.loading = false;
          },
          error: (error) => {
            this.error = 'Error loading Pokemon details';
            this.loading = false;
            console.error('Error:', error);
          }
        });
      },
      error: (error) => {
        this.error = 'Error loading Pokemon list';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  getPokemonTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[type] || '#68A090';
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
