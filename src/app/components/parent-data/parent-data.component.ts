import { Component, Input } from '@angular/core';
import User from '../interfaces/usuario.interface';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
  @Input() usuarioDadosDois!: User;
  @Input() usuarioDados!: User;
  @Input() userDados!: User;
  @Input() userData!: { email: string; role: string };

  constructor() {}
}
