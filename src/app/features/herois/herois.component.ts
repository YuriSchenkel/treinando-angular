import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { heroesMock } from 'src/app/core/mock/heroes.mock';
import { HeroisModel } from 'src/app/core/model/heroi.model';
@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: HeroisModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.heroes = heroesMock;
  }
  selectHero(id: number) {
    this.router.navigate([`edit-hero/${id}`]);
  }
}
