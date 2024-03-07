import { HttpClient } from '@angular/common/http';
import { usuariosMock } from 'src/app/mock/usuarios.mock';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(http: HttpClient) {}

  pegaUsuarios(ativo?: boolean) {
    return usuariosMock;
  }
}
