import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyEmitter {
  public onHistoricoCalculadora: EventEmitter<any> = new EventEmitter();
}
