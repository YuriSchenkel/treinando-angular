import { BootstrapOptions, Component } from '@angular/core';
import Usuario from './interfaces/usuarios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editou: boolean = false;

  usuarios: Usuario[] = [
    {
      id: 0,
      nome: 'Yuri',
      idade: 18,
      email: 'yuri.teze@xpert.com.br',
      profissao: 'Desenvolvedor Web (Estagiário)',
    },
    {
      id: 1,
      nome: 'Jaime',
      idade: 29,
      email: 'jaime@gmail.com',
      profissao: 'Padeiro',
    },
  ];

  excluirUsuario(id: number) {
    const find = this.usuarios.findIndex((usuario) => usuario.id === id);
    this.usuarios.splice(find, 1);
  }
  title = 'aula01-angular';
}
