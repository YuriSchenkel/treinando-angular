import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usuariosMock } from 'src/app/core/mock/usuarios.mock';
import { UsuariosModel } from 'src/app/core/model/usuario.model';
import { UsuarioService } from './usuario.service';
import { addressInterface } from './usuario.interface';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public user: UsuariosModel = new UsuariosModel();
  public index = usuariosMock.findIndex((el) => this.id === el.id);
  public formGroup: FormGroup;
  public model: UsuariosModel;
  public cep: number = 85501292;
  public address: addressInterface = {};

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.getCep();
    this.model = usuariosMock[this.index];
    this.formGroup = formBuilder.group(this.model);
  }

  ngOnInit(): void {
    const meuRota = this.route;
    this.user = usuariosMock[this.index];
    this.formGroup.controls['name'].setValidators([Validators.required]);
    this.formGroup.controls['age'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([Validators.required]);
    this.formGroup.controls['cpf'].setValidators([Validators.required]);
    this.formGroup.controls['profession'].setValidators([Validators.required]);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    usuariosMock[this.index] = this.formGroup.value;
    this.router.navigate(['/users']);
  }

  getCep() {
    this.usuarioService
      .getAll(this.cep)
      .subscribe((cep) => (this.address = cep));
  }
}
