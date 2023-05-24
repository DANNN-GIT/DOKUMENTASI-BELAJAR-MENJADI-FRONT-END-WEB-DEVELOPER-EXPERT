import DrawerInitiator from '../utils/drawer-initiator';
import Routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    activeHamburger, nonActiveHamburger, headerSticky, navigationBar, content,
  }) {
    this._activeHamburger = activeHamburger;
    this._nonActiveHamburger = nonActiveHamburger;
    this._headerSticky = headerSticky;
    this._navigationBar = navigationBar;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      activeHamburger: this._activeHamburger,
      nonActiveHamburger: this._nonActiveHamburger,
      headerSticky: this._headerSticky,
      navigationBar: this._navigationBar,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
