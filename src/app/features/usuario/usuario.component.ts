import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usuariosMock } from 'src/app/core/mock/usuarios.mock';
import { UsuariosModel } from 'src/app/core/model/usuario.model';
import { UsuarioService } from './usuario.service';
import { addressInterface } from './usuario.interface';
import { compileDeclareInjectorFromMetadata } from '@angular/compiler';
import { first } from 'rxjs';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public user: UsuariosModel = new UsuariosModel();
  public index = usuariosMock.findIndex((el) => this.id === el.id);
  public formGroup: UntypedFormGroup;
  public model: UsuariosModel;
  public address: addressInterface = {};

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.model = usuariosMock[this.index];
    this.formGroup = this.fb.group(this.model);
  }

  ngOnInit(): void {
    const meuRota = this.route;
    this.user = usuariosMock[this.index];
    this.formGroup.controls['name'].setValidators([Validators.required]);
    this.formGroup.controls['age'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([Validators.required]);
    this.formGroup.controls['cpf'].setValidators([Validators.required]);
    this.formGroup.controls['profession'].setValidators([Validators.required]);
    this.formGroup.controls['cep'].setValidators([Validators.required]);
    this.formGroup.controls['cidade'].setValidators([Validators.required]);
    this.formGroup.controls['uf'].setValidators([Validators.required]);
    this.formGroup.controls['logradouro'].setValidators([Validators.required]);
    this.formGroup.controls['bairro'].setValidators([Validators.required]);
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    usuariosMock[this.index] = this.formGroup.value;
    this.router.navigate(['/users']);
  }

  onLoadCep() {
    const cep = this.formGroup.controls['cep'].value;
    this.validCep(cep);
    this.getCep(cep);
  }

  validCep(cep: string): void {
    const cepValid = cep?.length === 8 ? true : false;

    if (cepValid === false) {
      throw new Error('CEP Inválido');
    }
  }

  getCep(cep: string) {
    this.usuarioService.getAll(cep).subscribe((address) => {
      const value = address;
      this.formGroup.controls['cidade'].setValue(value.localidade);
      this.formGroup.controls['uf'].setValue(value.uf);
      this.formGroup.controls['bairro'].setValue(value.bairro);
      this.formGroup.controls['logradouro'].setValue(value.logradouro);
    });
    console.log(this.address);
  }

  onLoadCpf() {
    const cpf = this.formGroup.controls['cpf'].value;
    this.validCpf(cpf);
    const formatedCpf = this.getCpf(cpf);
    this.formGroup.controls['cpf'].setValue(formatedCpf);
    console.log(formatedCpf);
  }

  validCpf(cpf: string) {
    const cpfValid = cpf.length < 14 ? true : false;

    if (cpfValid === false) {
      throw new Error('CPF Inválido');
    }
  }

  getCpf(cpf: string): string {
    if (cpf.length === 3 || cpf.length === 7) {
      cpf += '.';
    } else if (cpf.length === 11) {
      cpf += '-';
    } else {
    }

    return cpf;
  }
}
