import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {
    let myLabel: string = value.slice(0, 3);
    myLabel += '.';
    myLabel += value.slice(3, 6);
    myLabel += '.';
    myLabel += value.slice(6, 9);
    myLabel += '-';
    myLabel += value.slice(9, 11);

    return myLabel;
  }
}
