import { ToDoListAngularJSPage } from './app.po';

describe('to-do-list-angular-js App', () => {
  let page: ToDoListAngularJSPage;

  beforeEach(() => {
    page = new ToDoListAngularJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
