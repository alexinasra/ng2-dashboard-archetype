import { browser, element, by } from 'protractor';

export class WebappArchetypePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {

    return browser.getLocationAbsUrl();
  }
}
