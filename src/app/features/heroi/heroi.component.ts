import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { heroesMock } from 'src/app/core/mock/heroes.mock';
import { HeroisModel } from 'src/app/core/model/heroi.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css'],
})
export class HeroiComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public hero: HeroisModel = new HeroisModel();
  public index = heroesMock.findIndex((el) => this.id === el.id);
  public formGroup: FormGroup;
  public model: HeroisModel;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.model = heroesMock[this.index];
    this.formGroup = formBuilder.group(this.model);
  }

  ngOnInit(): void {
    const meuRota = this.route;
    this.hero = heroesMock[this.index];
    this.formGroup.controls['name'].setValidators([Validators.required]);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    heroesMock[this.index] = this.formGroup.value;
    this.router.navigate(['/heroes']);
  }
}
