import { YataPage } from './app.po';

describe('yata App', () => {
  let page: YataPage;

  beforeEach(() => {
    page = new YataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
