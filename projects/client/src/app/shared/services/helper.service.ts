import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  static textToHtml(text: any) {
    text = '<p>' + text + '</p>';
    text = text.replace(/\n\n/g, '</p><p>');
    text = text.replace(/\n/g, '<br>');
    return text;
  }
}
