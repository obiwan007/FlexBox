import { FlexTestPage } from './app.po';

describe('flex-test App', function() {
  let page: FlexTestPage;

  beforeEach(() => {
    page = new FlexTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
