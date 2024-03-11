import { Component, EventEmitter, Input, Output } from '@angular/core';
import Hero from 'src/app/interfaces/heroes.interface';
import { HeroisModel } from 'src/app/model/heroi.model';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css'],
})
export class HeroiComponent {
  @Input() hero: HeroisModel = new HeroisModel();
  @Output() emitirHeroi: EventEmitter<HeroisModel> =
    new EventEmitter<HeroisModel>();
  @Output() emitirFechou: EventEmitter<boolean> = new EventEmitter<boolean>();

  emissaoSalvou(hero: HeroisModel) {
    this.emitirHeroi.emit(hero);
  }

  emissaoFechou() {
    const fechou = false;
    this.emitirFechou.emit(fechou);
  }
}
