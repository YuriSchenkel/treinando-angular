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
  @Output() emitterSaveHero: EventEmitter<HeroisModel> =
    new EventEmitter<HeroisModel>();
  @Output() emitterCloseEdition: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  saveHero(hero: HeroisModel) {
    this.emitterSaveHero.emit(hero);
  }

  closeEdition() {
    const fechou = false;
    this.emitterCloseEdition.emit(fechou);
  }
}
