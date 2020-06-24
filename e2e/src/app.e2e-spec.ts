import { AppPage } from './app.po';
<<<<<<< HEAD
import { browser, logging } from 'protractor';
=======
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('delhi-delicacy app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
=======
    expect(page.getParagraphText()).toEqual('Welcome to Delhi-Delicacy!');
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
  });
});
