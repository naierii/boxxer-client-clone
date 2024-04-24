import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasKey'
})
export class HasKeyPipe implements PipeTransform {
  transform(object: any, key: string): boolean {
    const args = key.split('.');

    for (const arg of args) {
      if (!object || !object.hasOwnProperty(arg)) {
        return false;
      }
      object = object[arg];
    }

    return true;
  }
}
