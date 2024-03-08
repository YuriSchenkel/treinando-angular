import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { UsuariosModel } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, OnChanges {
  @Input() usuario: UsuariosModel = new UsuariosModel();
  @Output() usuarioSalvar: EventEmitter<UsuariosModel> =
    new EventEmitter<UsuariosModel>();
  @Output() fecharJanela: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(): void {
    this.usuario;
  }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  pegarUsuario(user: UsuariosModel) {
    console.log(user);
  }

  salvarUsuario() {
    this.usuarioSalvar.emit(this.usuario);
  }

  fecharEdicao() {
    const fecharJanela = false;
    this.fecharJanela.emit(fecharJanela);
  }
}
