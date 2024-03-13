import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from './model/usuario.model';
import { usuariosMock } from './mock/usuarios.mock';
import { heroesMock } from './mock/heroes.mock';
import { HeroisModel } from './model/heroi.model';
import { buttonMock } from './mock/button.mock';
import CalculadoraInterface from './interfaces/calculadora.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public btnEscolha: string[] = [];
  public historicoCalculadora: CalculadoraInterface[] = [];
  public escolheuCalculadora: boolean = false;
  public numeroUm: number = 0;
  public numeroDois: number = 0;
  public operacao: string = '';
  public visor: string = '0';
  public tamanho: number = 0;
  public resultado: number = 0;
  public contVirgula: number = 0;
  public contOperacao: number = 0;
  public validacaoRecebeuIgual: boolean = false;
  public validacaoOperacaoDireta: boolean = false;
  public escolheuHistorico: boolean = false;
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

  onReceberNumero(numero: string) {
    let verificacao = true;

    if (this.validacaoRecebeuIgual) {
      this.contOperacao = 0;
      this.visor = '0';
      this.validacaoRecebeuIgual = false;
    }

    if (numero === '.') {
      this.contVirgula++;
    }
    if (this.contVirgula > 1) {
      verificacao = false;
      this.contVirgula--;
    }
    if (this.visor === '0' && numero !== '.') {
      this.visor = '';
    }
    if (verificacao) {
      this.visor += numero;
      if (this.contOperacao > 0 || this.validacaoOperacaoDireta) {
        if (this.numeroDois === 0 && numero === '.') {
          this.numeroDois = 0;
          this.validacaoOperacaoDireta = false;
        } else {
          let string = this.visor.slice(this.tamanho);
          this.numeroDois = Number(string);
          this.validacaoOperacaoDireta = false;
        }
      } else {
        if (this.numeroDois === 0 && numero === '.') {
          this.numeroDois = 0;
          this.validacaoOperacaoDireta = false;
        } else {
          let string = this.visor.slice(this.tamanho);
          this.numeroDois = Number(string);
          this.validacaoOperacaoDireta = false;
        }
      }
    }
  }

  onReceberClear() {
    this.visor = '0';
    this.contVirgula = 0;
    this.contOperacao = 0;
    this.numeroDois = 0;
    this.numeroUm = 0;
    this.operacao = '';
  }

  onReceberOperacao(operacao: string) {
    let verificacao = true;

    if (this.numeroDois !== 0 && this.contOperacao > 0 && verificacao) {
      verificacao = false;
      this.operacaoDireta(operacao);
      this.contOperacao++;
    }
    if (this.contOperacao > 0 && verificacao) {
      const string = this.visor.slice(0, -3);
      this.visor = string;
    }
    if (verificacao) {
      this.visor += operacao;
      this.operacao = operacao;
      this.contOperacao++;
    }
  }

  operacaoDireta(operacao: string) {
    switch (this.operacao) {
      case ' + ':
        this.somar(operacao);
        break;
      case ' - ':
        this.subtrair(operacao);
        break;
      case ' x ':
        this.multiplicar(operacao);
        break;
      case ' ÷ ':
        this.dividir(operacao);
        break;
    }
  }

  onReceberIgual() {
    switch (this.operacao) {
      case ' + ':
        this.somar();
        this.validacaoRecebeuIgual = true;
        break;
      case ' - ':
        this.subtrair();
        this.validacaoRecebeuIgual = true;
        break;
      case ' x ':
        this.multiplicar();
        this.validacaoRecebeuIgual = true;
        break;
      case ' ÷ ':
        this.dividir();
        this.validacaoRecebeuIgual = true;
        break;
    }
  }

  onReceberHistorico() {
    this.escolheuHistorico = true;
  }

  onFecharHistorico() {
    this.escolheuHistorico = false;
  }

  somar(operacao?: string) {
    this.resultado = this.numeroUm + this.numeroDois;
    console.log(
      this.numeroUm + '   ' + this.operacao + '   ' + this.numeroDois
    );
    if (
      this.numeroUm !== 0 &&
      this.operacao !== '' &&
      this.numeroDois !== 0 &&
      operacao !== undefined
    ) {
      this.visor = this.resultado.toString() + operacao;
      this.contOperacao = 0;
      this.validacaoOperacaoDireta = true;
    } else {
      this.visor = this.resultado.toString();
    }
    const input: CalculadoraInterface = {
      numeroUm: this.numeroUm,
      operacao: this.operacao,
      numeroDois: this.numeroDois,
      resultado: this.resultado,
    };
    this.historicoCalculadora.push(input);
    this.numeroUm = this.resultado;
    this.operacao = operacao!;
  }

  subtrair(operacao?: string) {
    this.resultado = this.numeroUm - this.numeroDois;
    console.log(
      this.numeroUm + '   ' + this.operacao + '   ' + this.numeroDois
    );
    if (
      this.numeroUm !== 0 &&
      this.operacao !== '' &&
      this.numeroDois !== 0 &&
      operacao !== undefined
    ) {
      this.visor = this.resultado.toString() + operacao;
      this.contOperacao = 0;
      this.validacaoOperacaoDireta = true;
    } else {
      this.visor = this.resultado.toString();
    }
    const input: CalculadoraInterface = {
      numeroUm: this.numeroUm,
      operacao: this.operacao,
      numeroDois: this.numeroDois,
      resultado: this.resultado,
    };
    this.historicoCalculadora.push(input);
    this.numeroUm = this.resultado;
    this.operacao = operacao!;
  }

  multiplicar(operacao?: string) {
    this.resultado = this.numeroUm * this.numeroDois;
    if (
      this.numeroUm !== 0 &&
      this.operacao !== '' &&
      this.numeroDois !== 0 &&
      operacao !== undefined
    ) {
      this.visor = this.resultado.toString() + operacao;
      this.contOperacao = 0;
      this.validacaoOperacaoDireta = true;
    } else {
      this.visor = this.resultado.toString();
    }
    const input: CalculadoraInterface = {
      numeroUm: this.numeroUm,
      operacao: this.operacao,
      numeroDois: this.numeroDois,
      resultado: this.resultado,
    };
    this.historicoCalculadora.push(input);
    this.numeroUm = this.resultado;
    this.operacao = operacao!;
  }

  dividir(operacao?: string) {
    this.resultado = this.numeroUm / this.numeroDois;

    console.log(
      this.numeroUm + '   ' + this.operacao + '   ' + this.numeroDois
    );
    if (
      this.numeroUm !== 0 &&
      this.operacao !== '' &&
      this.numeroDois !== 0 &&
      operacao !== undefined
    ) {
      this.visor = this.resultado.toString() + operacao;
      this.contOperacao = 0;
      this.validacaoOperacaoDireta = true;
    } else {
      this.visor = this.resultado.toString();
    }
    const input: CalculadoraInterface = {
      numeroUm: this.numeroUm,
      operacao: this.operacao,
      numeroDois: this.numeroDois,
      resultado: this.resultado,
    };
    this.historicoCalculadora.push(input);
    this.numeroUm = this.resultado;
    this.operacao = operacao!;
  }
}
