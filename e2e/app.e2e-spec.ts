import { BoxxerClientPage } from './app.po';

describe('boxxer-client App', () => {
  let page: BoxxerClientPage;

  beforeEach(() => {
    page = new BoxxerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
  });
});
