import { WebappArchetypePage } from './app.po';

describe('webapp-archetype App', function() {
  let page: WebappArchetypePage;

  beforeEach(() => {
    page = new WebappArchetypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
