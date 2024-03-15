import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  filmes = [
    'Duna',
    'Star Wars',
    'Carros',
    'Homem-Aranha',
    'Todos Menos Você',
    'Spirit',
    'Harry Potter',
    'Senhor do Anéis',
  ];

  movie: string = '';

  changeMovie(): void {
    let number = Math.floor(Math.random() * this.filmes.length);
    this.movie = this.filmes[number];
  }
}
