import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuariosModel } from '../../model/usuario.model';

@Component({
  selector: 'app-usuarios-component',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  @Input() usuarios: UsuariosModel[] = [];
  @Output() indexExcluir: EventEmitter<number> = new EventEmitter<number>();
  @Output() emissaoDeEdicao: EventEmitter<UsuariosModel> =
    new EventEmitter<UsuariosModel>();

  editarUsuario(user?: UsuariosModel) {
    this.emissaoDeEdicao.emit(user);
  }

  excluirUsuario(id: number) {
    this.indexExcluir.emit(id);
  }
}
