import { Component, OnInit, inject } from '@angular/core';
import { buttonList } from './core/components/toolbar/toolbar-list';
import { routesListInterface } from './core/components/toolbar/routesList.interface';
import { TemperaturaComponent } from './features/temperatura/temperatura.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aula01-angular';
  public routesList: routesListInterface[] = [];

  ngOnInit(): void {
    this.routesList = buttonList;
  }
}
