import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from './model/usuario.model';
import { usuariosMock } from './mock/usuarios.mock';
import { heroesMock } from './mock/heroes.mock';
import { HeroisModel } from './model/heroi.model';
import { buttonMock } from './mock/button.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public btnEscolha: string[] = [];
  public escolheuCalculadora: boolean = false;
  public numeroUm: number = 0;
  public numeroDois: number = 0;
  public operacao: string = '';
  public visor: string = '0';
  public tamanho: number = 0;
  public contVirgula: number = 0;
  public contOperacao: number = 0;
  public escolheuHeroi: boolean = false;
  public heroes: HeroisModel[] = [];
  public heroiSelecionado: HeroisModel = new HeroisModel();
  public recebeuHeroi: boolean = false;
  public escolheuUsuario: boolean = false;
  public usuarios: UsuariosModel[] = [];
  public usuarioSelecionado: UsuariosModel = new UsuariosModel();
  public recebeuUser: boolean = false;

  ngOnInit(): void {
    this.usuarios = usuariosMock;
    this.heroes = heroesMock;
    this.btnEscolha = buttonMock;
  }

  edicaoUsuario(user: UsuariosModel) {
    this.usuarioSelecionado = { ...user };
    this.recebeuUser = true;
  }

  salvarUsuario(user: UsuariosModel) {
    const id = this.usuarios.findIndex((el) => el.id === user.id);
    usuariosMock[id] = user;
    this.recebeuUser = false;
  }

  fecharEdicao(fechar: boolean) {
    this.recebeuUser = fechar;
  }

  excluirUsuario(id: number) {
    const index = usuariosMock.findIndex((el) => el.id === id);
    usuariosMock.splice(index, 1);
  }

  selecionaHeroi(hero: HeroisModel) {
    this.heroiSelecionado = { ...hero };
    this.recebeuHeroi = true;
  }

  salvarHeroi(hero: HeroisModel) {
    const index = heroesMock.findIndex((el) => el.id === hero.id);
    heroesMock[index] = hero;
    this.recebeuHeroi = false;
  }

  fecharEdicaoHeroi() {
    this.recebeuHeroi = false;
  }

  onClickBtn(mostrar: boolean[]) {
    this.recebeuHeroi = false;
    this.recebeuUser = false;
    this.escolheuCalculadora = mostrar[0];
    this.escolheuHeroi = mostrar[1];
    this.escolheuUsuario = mostrar[2];
  }

  receberNumero(numero: string) {
    let verificacao = true;

    if (numero === ',') {
      this.contVirgula++;
    }
    if (this.contVirgula > 1) {
      verificacao = false;
      this.contVirgula--;
    }
    if (this.visor === '0' && numero !== ',') {
      this.visor = '';
    }
    if (verificacao) {
      this.visor += numero;
      if (this.contOperacao > 0) {
        let string = this.visor.slice(this.tamanho);
        this.numeroDois = Number(string);
        console.log('Number 2 ' + this.numeroDois);
        console.log(this.tamanho + '  ' + this.visor);
      } else {
        this.tamanho = this.visor.length + 3;
        this.numeroUm = Number(this.visor);
        console.log('Number 1 ' + this.numeroUm);
      }
    }
  }

  receberClear() {
    this.visor = '0';
    this.contVirgula = 0;
    this.contOperacao = 0;
  }

  receberOperacao(operacao: string) {
    if (this.contOperacao > 0) {
      const string = this.visor.slice(0, -3);
      this.visor = string;
    }
    this.visor += operacao;
    this.contOperacao++;
  }
  somar(numeroUm: number, numeroDois: number) {
    let resultado = numeroUm + numeroDois;
  }

  subtrair(numeroUm: number, numeroDois: number) {
    let resultado = numeroUm - numeroDois;
  }

  multiplicar(numeroUm: number, numeroDois: number) {
    let resultado = numeroUm * numeroDois;
  }

  dividir(numeroUm: number, numeroDois: number) {
    let resultado = numeroDois / numeroDois;
  }
}
