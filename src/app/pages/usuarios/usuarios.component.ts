import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from './model/usuario.model';
import { UsuariosService } from './usuarios.service';
import { usuariosMock } from 'src/app/mock/usuarios.mock';

@Component({
  selector: 'app-usuarios-component',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  public usuarios: UsuariosModel[] = [];

  // constructor() {}

  ngOnInit(): void {
    this.usuarios = usuariosMock;
  }
}
