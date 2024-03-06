import { Component } from '@angular/core';
import User from './components/interfaces/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userDados: User = {
    nome: 'Joaquim',
    idade: 20,
    profissao: 'Garçom',
  };

  usuarioDadosDois: User = {
    nome: 'Alan',
    idade: 32,
    profissao: 'Jogador',
  };

  usuarioDados: User = {
    nome: 'Yuri',
    idade: 18,
    profissao: 'Desenvolvedor Web',
  };

  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
  };

  title = 'aula01-angular';
}
