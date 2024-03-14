import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuariosModel } from '../../model/usuario.model';

@Component({
  selector: 'app-usuarios-component',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  @Input() users: UsuariosModel[] = [];
  @Output() emitterDeleteIndex: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() emitterEdition: EventEmitter<UsuariosModel> =
    new EventEmitter<UsuariosModel>();

  userEdit(user?: UsuariosModel) {
    this.emitterEdition.emit(user);
  }

  userDelete(id: number) {
    this.emitterDeleteIndex.emit(id);
  }
}
