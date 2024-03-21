import { Component, EventEmitter, Output } from '@angular/core';
import CalculadoraInterface from './calculadora.interface';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  public displayLabel: string = '0';
  public displayLength: number = 0;
  public numberOne: number = 0;
  public numberTwo: number = 0;
  public operation: string = '';
  public labelForNumberOne: string = '';
  public labelForNumberTwo: string = '';
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

  onClickNumber(number: string) {
    let verification = true;
    let canInsertNumberOne = true;
    let canInsertNumberTwo = true;
    this.chooseHistoric = false;

    if (this.validationReceiveEquals) {
      this.contOperation = 0;
      this.displayLabel = '0';
      this.labelForNumberTwo = '';
      this.labelForNumberOne = '';
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

    if (this.numberOne.toString().length > 9) {
      canInsertNumberOne = false;
    }

    if (this.numberTwo.toString().length > 9) {
      canInsertNumberTwo = false;
    }

    if (verification) {
      if (this.contOperation > 0) {
        if (canInsertNumberTwo) {
          this.displayLabel += number;
          this.labelForNumberTwo += number;
          this.numberTwo = Number(this.labelForNumberTwo);
          let label = this.numberTwo.toLocaleString('pt-BR');

          this.displayLabel = this.displayLabel.slice(
            0,
            this.displayLength - this.displayLabel.length
          );

          this.displayLabel += label;
        }
      } else {
        if (canInsertNumberOne) {
          this.displayLabel += number;
          this.labelForNumberOne += number;
          this.numberOne = Number(this.labelForNumberOne);
          let label = this.numberOne.toLocaleString('pt-BR');
          this.displayLabel = label;
        }
      }
    }
  }

  onClickClear() {
    this.chooseHistoric = false;
    this.displayLabel = '0';
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
    this.contOperation = 0;
    this.numberTwo = 0;
    this.numberOne = 0;
    this.labelForNumberOne = '';
    this.labelForNumberTwo = '';
    this.operation = '';
  }

  onClickOperation(operation: string) {
    this.chooseHistoric = false;
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
      this.displayLength = this.displayLabel.length;
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
    this.chooseHistoric = false;
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
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR') + operation;
      this.displayLength = this.displayLabel.length;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR');
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
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR') + operation;
      this.displayLength = this.displayLabel.length;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR');
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
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR') + operation;
      this.displayLength = this.displayLabel.length;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR');
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
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR') + operation;
      this.displayLength = this.displayLabel.length;
      this.contOperation = 0;
      this.validationDirectOperation = true;
    } else {
      let result = Number(this.result);
      this.displayLabel = result.toLocaleString('pt-BR');
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
