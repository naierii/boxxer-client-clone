import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratio',
})
export class RatioPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const ratioArr = value.split(':');
    return parseInt(ratioArr[0], 10) / parseInt(ratioArr[1], 10);
  }
}
