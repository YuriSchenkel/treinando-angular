import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarModule } from './core/components/toolbar/toolbar.module';
import { UsuariosModule } from './features/usuarios/usuarios.module';
import { UsuarioModule } from './features/usuario/usuario.module';
import { HeroisModule } from './features/herois/herois.module';
import { CalculadoraModule } from './features/calculadora/calculadora.module';
import { HistoricoModule } from './features/historico/historico.module';
import { HeroiModule } from './features/heroi/heroi.module';
import { FormsModule } from '@angular/forms';
import { BodyModule } from './core/components/body/body.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ToolbarModule,
    UsuariosModule,
    UsuarioModule,
    HeroiModule,
    HeroisModule,
    HistoricoModule,
    CalculadoraModule,
    AppRoutingModule,
    BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
