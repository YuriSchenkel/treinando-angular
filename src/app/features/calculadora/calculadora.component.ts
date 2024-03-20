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
  public result: number = 0;
  public contCommaNumberOne: number = 0;
  public contCommaNumberTwo: number = 0;
  public contCaseNumber1: number = 0;
  public contCaseNumber2: number = 0;
  public contNumberPoints1: number = 0;
  public contNumberPoints2: number = 0;
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
    this.chooseHistoric = false;

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
      let pointPosition: number = 0;
      if (this.contOperation > 0) {
        this.contCaseNumber2++;
        if (this.contCaseNumber2 % 4 === 0) {
          this.contNumberPoints2++;
          if (this.contNumberPoints2 > 1) {
            pointPosition = this.contNumberPoints2 + this.contNumberPoints2 * 2;
          } else {
            pointPosition = 1;
          }
          let label: string = this.labelForNumberTwo;
          label = label.substring(pointPosition);
          let length = label.length;
          let slicedLabel = this.displayLabel.slice(
            0,
            this.displayLabel.length - length
          );
          this.displayLabel = slicedLabel + '.';
          this.displayLabel += label + number;
        } else {
          this.displayLabel += number;
        }
        this.labelForNumberTwo += number;
        this.numberTwo = Number(this.labelForNumberTwo);
        this.validationDirectOperation = false;
      } else {
        this.contCaseNumber1++;
        if (String(this.numberOne).length > 3) {
          let label: string = String(this.numberOne);
          label = label.substring(pointPosition);
          let length = label.length;
          let slicedLabel = this.displayLabel.slice(
            0,
            this.displayLabel.length - length
          );
          this.displayLabel = slicedLabel + '.';
          this.displayLabel += label + number;
        } else {
          this.displayLabel += number;
        }
        this.numberOne = Number(this.displayLabel);
      }
    }
  }

  onClickClear() {
    this.chooseHistoric = false;
    this.displayLabel = '0';
    this.contCommaNumberOne = 0;
    this.contCommaNumberTwo = 0;
    this.contOperation = 0;
    this.contCaseNumber1 = 0;
    this.contCaseNumber2 = 0;
    this.numberTwo = 0;
    this.numberOne = 0;
    this.labelForNumberTwo = '';
    this.operation = '';
    this.contNumberPoints1 = 0;
    this.contNumberPoints2 = 0;
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
    this.contCaseNumber1 = 0;
    this.contCaseNumber2 = 0;
    this.contNumberPoints1 = 0;
    this.contNumberPoints2 = 0;
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
    this.contCaseNumber1 = 0;
    this.contCaseNumber2 = 0;
    this.contNumberPoints1 = 0;
    this.contNumberPoints2 = 0;
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
    this.contCaseNumber1 = 0;
    this.contCaseNumber2 = 0;
    this.contNumberPoints1 = 0;
    this.contNumberPoints2 = 0;
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
    this.contCaseNumber1 = 0;
    this.contCaseNumber2 = 0;
    this.contNumberPoints1 = 0;
    this.contNumberPoints2 = 0;
  }
}
