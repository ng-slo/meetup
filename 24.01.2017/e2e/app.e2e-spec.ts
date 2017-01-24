import { BasicsPage } from './app.po';

describe('basics App', function() {
  let page: BasicsPage;

  beforeEach(() => {
    page = new BasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
