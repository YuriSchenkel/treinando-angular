import { Component } from '@angular/core';
import { temperatureInterface } from './temperatura.interface';
import { TemperaturaService } from './temperatura.service';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
})
export class TemperaturaComponent {
  public temperature: temperatureInterface = {};
  public city: string = 'Pato Branco';

  // constructor(private temperatureService: TemperaturaService) {
  //   this.getTemperature();
  // }

  // getTemperature(): void {
  //   this.temperatureService
  //     .getAll(this.city)
  //     .subscribe((temperature) => (this.temperature = temperature));
  // }
}
