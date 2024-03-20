import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroesMock } from 'src/app/core/mock/heroes.mock';
import { HeroisModel } from 'src/app/core/model/heroi.model';
import { HeroisModule } from '../herois/herois.module';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css'],
})
export class HeroiComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public hero: HeroisModel = new HeroisModel();
  public index = heroesMock.findIndex((el) => this.id === el.id);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const meuRota = this.route;
    this.hero = heroesMock[this.index];
  }

  saveHero(hero: HeroisModel) {
    heroesMock[this.index] = hero;
  }
}
