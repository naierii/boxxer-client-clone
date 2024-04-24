import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPrice'
})
export class DecimalPricePipe implements PipeTransform {
  transform(value: number): any {
    return value / 100;
  }
}
