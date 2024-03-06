import { Component } from '@angular/core';
import movieInterface from 'src/app/interfaces/filmes.interface';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  filmes: movieInterface[] = [
    { nome: 'Wish: O Poder dos Desejos', ano: 2024 },
    { nome: 'Madame Teia', ano: 2024 },
    { nome: 'Duna: Parte Dois', ano: 2024 },
    { nome: 'Ferrari', ano: 2024 },
    { nome: 'Bob Marley', ano: 2024 },
  ];
}
