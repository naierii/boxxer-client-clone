import { browser, element, by } from 'protractor';

export class BoxxerClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bx-root h1')).getText();
  }
}
