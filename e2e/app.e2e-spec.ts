import { TestInstagramPage } from './app.po';

describe('test-instagram App', function() {
  let page: TestInstagramPage;

  beforeEach(() => {
    page = new TestInstagramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
