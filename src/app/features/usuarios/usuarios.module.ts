import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule } from '@angular/router';
import { UsuarioModule } from '../usuario/usuario.module';
import { CpfPipeModule } from 'src/app/shared/pipes/pipe/cpf/cpf-pipe.module';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [BrowserModule, RouterModule, UsuarioModule, CpfPipeModule],
  bootstrap: [UsuariosComponent],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
