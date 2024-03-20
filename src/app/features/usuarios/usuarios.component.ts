import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuariosMock } from 'src/app/core/mock/usuarios.mock';
import { UsuariosModel } from 'src/app/core/model/usuario.model';

@Component({
  selector: 'app-usuarios-component',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  public users: UsuariosModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.users = usuariosMock;
  }

  editUser(id: number): void {
    this.router.navigate([`edit-user/${id}`]);
  }

  deleteUser(id: number) {
    let index = this.users.findIndex((el) => id === el.id);
    usuariosMock.splice(index, 1);
  }
}
