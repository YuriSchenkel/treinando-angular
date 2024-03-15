import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  nome: string = 'Yuri';
  idade: number = 18;
  profissao: string = 'Desenvolvedor Web';
  carro = {
    nome: 'Nivus',
    ano: 2022,
  };

  constructor() {}

  ngOnInit(): void {}
}
