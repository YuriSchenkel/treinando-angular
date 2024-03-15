import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { UsuariosModel } from 'src/app/core/model/usuario.model';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, OnChanges {
  @Input() user: UsuariosModel = new UsuariosModel();
  @Output() emitterSaveUser: EventEmitter<UsuariosModel> =
    new EventEmitter<UsuariosModel>();
  @Output() emitterCloseWindow: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  ngOnChanges(): void {
    this.user;
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  saveUser() {
    this.emitterSaveUser.emit(this.user);
  }

  fecharEdicao() {
    const fecharJanela = false;
    this.emitterCloseWindow.emit(fecharJanela);
  }
}
