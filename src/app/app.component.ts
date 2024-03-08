import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { UsuariosModel } from './model/usuario.model';
import { usuariosMock } from './mock/usuarios.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public usuarios: UsuariosModel[] = [];
  public usuarioSelecionado: UsuariosModel = new UsuariosModel();
  public recebeuUser: boolean = false;

  ngOnInit(): void {
    this.usuarios = usuariosMock;
  }

  edicaoUsuario(user: UsuariosModel) {
    this.usuarioSelecionado = { ...user };
    this.recebeuUser = true;
  }

  salvarUsuario(user: UsuariosModel) {
    const id = this.usuarios.findIndex((el) => el.id === user.id);
    this.usuarios[id] = user;
    this.recebeuUser = false;
  }

  fecharEdicao(fechar: boolean) {
    this.recebeuUser = fechar;
  }

  excluirUsuario(id: number) {
    const index = this.usuarios.findIndex((el) => el.id === id);
    this.usuarios.splice(index, 1);
  }
}
