import { Component, EventEmitter, Input, Output } from '@angular/core';
import Hero from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css'],
})
export class HeroesComponent {
  @Input() heroes: Hero[] = [];
  @Output() emitterHeroSelected: EventEmitter<Hero> = new EventEmitter<Hero>();

  heroSelected(hero: Hero) {
    this.emitterHeroSelected.emit(hero);
  }
}
