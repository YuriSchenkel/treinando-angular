import { Component, EventEmitter, Output } from '@angular/core';
import CalculadoraInterface from './calculadora.interface';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  public displayLabel: string = '0';
  public numberOne: number = 0;
  public numberTwo: number = 0;
  public operation: string = '';
  public labelForNumberTwo: string = '';
  public lengthDisplay: number = 0;
  public result: number = 0;
  public contCommaNumberOne: number = 0;
  public contCommaNumberTwo: number = 0;
  public contOperation: number = 0;
  public validationReceiveEquals: boolean = false;
  public validationDirectOperation: boolean = false;
  public historyCalculator: CalculadoraInterface[] = [];
  public chooseHistoric: boolean = false;

  onChooseHistoric() {
    this.chooseHistoric = true;
  }

  onCloseHistoric() {
    this.chooseHistoric = false;
  }

  onClickNumber(number: string) {
    let verification = true;

    if (this.validationReceiveEquals) {
      this.contOperation = 0;
      this.displayLabel = '0';
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
      this.displayLabel += '0.';
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

    if (this.displayLabel === '0' && number !== '.') {
      this.displayLabel = '';
    }
    if (verification) {
      this.displayLabel += number;
      if (this.contOperation > 0) {
        this.labelForNumberTwo += number;
        this.numberTwo = Number(this.labelForNumberTwo);
        this.validationDirectOperation = false;
      } else {
        this.numberOne = Number(this.displayLabel);
      }
    }
  }

  onClickClear() {
    this.displayLabel = '0';
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
    this.contOperation = 0;
    this.numberTwo = 0;
    this.numberOne = 0;
    this.labelForNumberTwo = '';
    this.operation = '';
  }

  onClickOperation(operation: string) {
    let verification = true;

    if (this.numberTwo !== 0 && this.contOperation > 0 && verification) {
      verification = false;
      this.labelForNumberTwo = '';
      this.directOperation(operation);
      this.contOperation = 1;
    }
    if (this.contOperation > 0 && verification) {
      const string = this.displayLabel.slice(0, -3);
      this.displayLabel = string;
    }
    if (verification) {
      this.displayLabel += operation;
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

  onClickEqual() {
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

  addition(operation?: string) {
    this.result = this.numberOne + this.numberTwo;

    if (this.operation !== '' && operation !== undefined) {
      this.displayLabel = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.displayLabel = this.result.toString();
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
      this.displayLabel = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.displayLabel = this.result.toString();
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
      this.displayLabel = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.displayLabel = this.result.toString();
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
      this.displayLabel = this.result.toString() + operation;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      this.displayLabel = this.result.toString();
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
