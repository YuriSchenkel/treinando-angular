import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from './core/model/usuario.model';
import { usuariosMock } from './core/mock/usuarios.mock';
import { heroesMock } from './core/mock/heroes.mock';
import { HeroisModel } from './core/model/heroi.model';
import { buttonMock } from './core/mock/button.mock';
import CalculadoraInterface from './shared/components/interfaces/calculadora.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public chooseBtn: string[] = [];
  public chooseCalculator: boolean = false;
  public numberOne: number = 0;
  public numberTwo: number = 0;
  public operation: string = '';
  public labelDisplay: string = '0';
  public labelForNumberTwo: string = '';
  public lengthDisplay: number = 0;
  public result: number = 0;
  public contCommaNumberOne: number = 0;
  public contCommaNumberTwo: number = 0;
  public contOperation: number = 0;
  public validationReceiveEquals: boolean = false;
  public validationDirectOperation: boolean = false;
  public historyCalculator: CalculadoraInterface[] = [];
  public chooseHistory: boolean = false;
  public chooseHero: boolean = false;
  public heroes: HeroisModel[] = [];
  public heroSelected: HeroisModel = new HeroisModel();
  public receiveHero: boolean = false;
  public chooseUser: boolean = false;
  public users: UsuariosModel[] = [];
  public userSelected: UsuariosModel = new UsuariosModel();
  public receiveUser: boolean = false;

  ngOnInit(): void {
    this.users = usuariosMock;
    this.heroes = heroesMock;
    this.chooseBtn = buttonMock;
  }

  userEdition(user: UsuariosModel) {
    this.userSelected = { ...user };
    this.receiveUser = true;
  }

  saveUser(user: UsuariosModel) {
    const id = this.users.findIndex((el) => el.id === user.id);
    usuariosMock[id] = user;
    this.receiveUser = false;
  }

  closeEdition(close: boolean) {
    this.receiveUser = close;
  }

  deleteUser(id: number) {
    const index = usuariosMock.findIndex((el) => el.id === id);
    usuariosMock.splice(index, 1);
  }

  selectHero(hero: HeroisModel) {
    this.heroSelected = { ...hero };
    this.receiveHero = true;
  }

  saveHero(hero: HeroisModel) {
    const index = heroesMock.findIndex((el) => el.id === hero.id);
    heroesMock[index] = hero;
    this.receiveHero = false;
  }

  closeHeroEdition() {
    this.receiveHero = false;
  }

  onClickBtn(show: boolean[]) {
    this.chooseCalculator = show[0];
    this.chooseHistory = show[1];
    this.chooseHero = show[2];
    this.chooseUser = show[3];
  }

  onReceiveNumber(number: string) {
    let verification = true;

    if (this.validationReceiveEquals) {
      this.contOperation = 0;
      this.labelDisplay = '0';
      this.labelForNumberTwo = '';
      this.validationReceiveEquals = false;
    }

    if (number === '.' && this.contOperation <= 0) {
      this.contCommaNumberOne++;
    }

    if (this.contCommaNumberOne > 1) {
      verification = false;
      this.contCommaNumberOne--;
    }

    if (number === '.' && this.contOperation > 0) {
      this.contCommaNumberTwo++;
    }

    if (
      number === '.' &&
      this.labelForNumberTwo === '' &&
      this.contCommaNumberTwo > 0
    ) {
      verification = false;
      this.labelDisplay += '0.';
      this.labelForNumberTwo = '0.';
      this.numberTwo = Number(this.labelForNumberTwo);
    }

    if (this.labelForNumberTwo === '0' && number === '0') {
      verification = false;
    }

    if (this.contCommaNumberTwo > 1) {
      verification = false;
      this.contCommaNumberTwo--;
    }

    if (this.labelDisplay === '0' && number !== '.') {
      this.labelDisplay = '';
    }
    if (verification) {
      this.labelDisplay += number;
      if (this.contOperation > 0) {
        this.labelForNumberTwo += number;
        this.numberTwo = Number(this.labelForNumberTwo);
        this.validationDirectOperation = false;
      } else {
        this.numberOne = Number(this.labelDisplay);
      }
    }
  }

  onReceiveClear() {
    this.labelDisplay = '0';
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
    this.contOperation = 0;
    this.numberTwo = 0;
    this.numberOne = 0;
    this.labelForNumberTwo = '';
    this.operation = '';
  }

  onReceiveOperation(operation: string) {
    let verification = true;

    if (this.numberTwo !== 0 && this.contOperation > 0 && verification) {
      verification = false;
      this.labelForNumberTwo = '';
      this.directOperation(operation);
      this.contOperation = 1;
    }
    if (this.contOperation > 0 && verification) {
      const string = this.labelDisplay.slice(0, -3);
      this.labelDisplay = string;
    }
    if (verification) {
      this.labelDisplay += operation;
      this.operation = operation;
      this.contOperation++;
    }
  }

  directOperation(operation: string) {
    switch (this.operation) {
      case ' + ':
        this.addition(operation);
        break;
      case ' - ':
        this.subtraction(operation);
        break;
      case ' x ':
        this.multiplication(operation);
        break;
      case ' ÷ ':
        this.division(operation);
        break;
    }
  }

  onReceiveEquals() {
    switch (this.operation) {
      case ' + ':
        this.addition();
        this.validationReceiveEquals = true;
        break;
      case ' - ':
        this.subtraction();
        this.validationReceiveEquals = true;
        break;
      case ' x ':
        this.multiplication();
        this.validationReceiveEquals = true;
        break;
      case ' ÷ ':
        this.division();
        this.validationReceiveEquals = true;
        break;
    }
  }

  onReceiveHistory() {
    this.chooseHistory = true;
  }

  onCloseHistory() {
    this.chooseHistory = false;
  }

  addition(operation?: string) {
    this.result = this.numberOne + this.numberTwo;

    if (this.operation !== '' && operation !== undefined) {
      this.labelDisplay = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.labelDisplay = this.result.toString();
    }
    const input: CalculadoraInterface = {
      numberOne: this.numberOne,
      operation: this.operation,
      numberTwo: this.numberTwo,
      result: this.result,
    };
    this.historyCalculator.push(input);
    this.numberOne = this.result;
    this.operation = operation!;
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
  }

  subtraction(operation?: string) {
    this.result = this.numberOne - this.numberTwo;

    if (this.operation !== '' && operation !== undefined) {
      this.labelDisplay = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.labelDisplay = this.result.toString();
    }
    const input: CalculadoraInterface = {
      numberOne: this.numberOne,
      operation: this.operation,
      numberTwo: this.numberTwo,
      result: this.result,
    };
    this.historyCalculator.push(input);
    this.numberOne = this.result;
    this.operation = operation!;
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
  }

  multiplication(operation?: string) {
    this.result = this.numberOne * this.numberTwo;
    if (this.operation !== '' && operation !== undefined) {
      this.labelDisplay = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.labelDisplay = this.result.toString();
    }
    const input: CalculadoraInterface = {
      numberOne: this.numberOne,
      operation: this.operation,
      numberTwo: this.numberTwo,
      result: this.result,
    };
    this.historyCalculator.push(input);
    this.numberOne = this.result;
    this.operation = operation!;
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
  }

  division(operation?: string) {
    this.result = this.numberOne / this.numberTwo;

    if (this.operation !== '' && operation !== undefined) {
      this.labelDisplay = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.labelDisplay = this.result.toString();
    }
    const input: CalculadoraInterface = {
      numberOne: this.numberOne,
      operation: this.operation,
      numberTwo: this.numberTwo,
      result: this.result,
    };
    this.historyCalculator.push(input);
    this.numberOne = this.result;
    this.operation = operation!;
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
  }
}
