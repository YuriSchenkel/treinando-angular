import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HeroesComponent } from './pages/herois/herois.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { HistoricoComponent } from './pages/historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayComponent,
    UsuariosComponent,
    UsuarioComponent,
    HeroesComponent,
    HeroiComponent,
    ToolbarComponent,
    CalculadoraComponent,
    HistoricoComponent,
  ],
  imports: [BrowserModule, FormsModule, MatToolbarModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
