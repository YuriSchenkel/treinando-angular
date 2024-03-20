import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CalculadoraInterface from 'src/app/features/calculadora/calculadora.interface';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  public calculatorHistory: CalculadoraInterface[] = [];
  @Input() receiveCalculatorHistory: CalculadoraInterface[] = [];
  @Output() emitterCloseHistoric: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.calculatorHistory = this.receiveCalculatorHistory;
  }

  onCloseHistoric() {
    this.emitterCloseHistoric.emit();
  }
}
