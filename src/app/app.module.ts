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
import { GamesModule } from './features/games/games.module';
import { TemperaturaModule } from './features/temperatura/temperatura.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { FooterModule } from './core/components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BodyModule,
    CalculadoraModule,
    FooterModule,
    FormsModule,
    GamesModule,
    HeroiModule,
    HeroisModule,
    HistoricoModule,
    TemperaturaModule,
    ToolbarModule,
    UsuarioModule,
    UsuariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
