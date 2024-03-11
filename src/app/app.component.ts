import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { UsuariosModel } from './model/usuario.model';
import { usuariosMock } from './mock/usuarios.mock';
import { heroesMock } from './mock/heroes.mock';
import { HeroisModel } from './model/heroi.model';
import { buttonMock } from './mock/button.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public btnEscolha: string[] = [];
  public escolheuHeroi: boolean = false;
  public escolheuUsuario: boolean = false;
  public heroes: HeroisModel[] = [];
  public heroiSelecionado: HeroisModel = new HeroisModel();
  public recebeuHeroi: boolean = false;
  public usuarios: UsuariosModel[] = [];
  public usuarioSelecionado: UsuariosModel = new UsuariosModel();
  public recebeuUser: boolean = false;

  ngOnInit(): void {
    this.usuarios = usuariosMock;
    this.heroes = heroesMock;
    this.btnEscolha = buttonMock;
  }

  edicaoUsuario(user: UsuariosModel) {
    this.usuarioSelecionado = { ...user };
    this.recebeuUser = true;
  }

  salvarUsuario(user: UsuariosModel) {
    const id = this.usuarios.findIndex((el) => el.id === user.id);
    usuariosMock[id] = user;
    this.recebeuUser = false;
  }

  fecharEdicao(fechar: boolean) {
    this.recebeuUser = fechar;
  }

  excluirUsuario(id: number) {
    const index = usuariosMock.findIndex((el) => el.id === id);
    usuariosMock.splice(index, 1);
  }

  selecionaHeroi(hero: HeroisModel) {
    this.heroiSelecionado = { ...hero };
    this.recebeuHeroi = true;
  }

  salvarHeroi(hero: HeroisModel) {
    const index = heroesMock.findIndex((el) => el.id === hero.id);
    heroesMock[index] = hero;
    this.recebeuHeroi = false;
  }

  fecharEdicaoHeroi() {
    this.recebeuHeroi = false;
  }

  onClickBtn(mostrar: boolean[]) {
    this.recebeuHeroi = false;
    this.recebeuUser = false;
    this.escolheuHeroi = mostrar[0];
    this.escolheuUsuario = mostrar[1];
  }
}
