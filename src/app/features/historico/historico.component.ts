import { Component, EventEmitter, Input, Output } from '@angular/core';
import CalculadoraInterface from 'src/app/core/interfaces/calculadora.interface';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent {
  @Input() historyCalculator: CalculadoraInterface[] = [];
}
