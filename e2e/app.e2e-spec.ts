import { AngulardirectiveshooksPage } from './app.po';

describe('angulardirectiveshooks App', function() {
  let page: AngulardirectiveshooksPage;

  beforeEach(() => {
    page = new AngulardirectiveshooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
