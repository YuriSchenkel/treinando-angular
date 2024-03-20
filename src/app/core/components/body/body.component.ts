import { Component, EventEmitter } from '@angular/core';
import CalculadoraInterface from 'src/app/features/calculadora/calculadora.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  public calculatorHistory: CalculadoraInterface[] = [];
  public evento: EventEmitter<any> = new EventEmitter();

  receiveCalculatorHistory(input: CalculadoraInterface[]) {
    this.calculatorHistory = input;
  }
}
