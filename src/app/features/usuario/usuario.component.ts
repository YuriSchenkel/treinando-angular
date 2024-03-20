import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuariosMock } from 'src/app/core/mock/usuarios.mock';
import { UsuariosModel } from 'src/app/core/model/usuario.model';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public user: UsuariosModel = new UsuariosModel();
  public index = usuariosMock.findIndex((el) => this.id === el.id);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const meuRota = this.route;
    this.user = usuariosMock[this.index];
  }

  saveUser(user: UsuariosModel) {
    usuariosMock[this.index] = user;
  }
}
