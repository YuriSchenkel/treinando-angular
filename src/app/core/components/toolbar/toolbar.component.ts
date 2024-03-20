import { Component, Input } from '@angular/core';
import { routesListInterface } from './routesList.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() routesList: routesListInterface[] = [];
}
