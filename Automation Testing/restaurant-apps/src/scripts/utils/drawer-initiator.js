const DrawerInitiator = {
  init({
    activeHamburger, nonActiveHamburger, headerSticky, navigationBar,
  }) {
    window.addEventListener('scroll', () => {
      this._windowScroll(headerSticky);
    });
    activeHamburger.addEventListener('click', (event) => {
      this._openDrawer(event, activeHamburger, nonActiveHamburger, headerSticky, navigationBar);
    });
    nonActiveHamburger.addEventListener('click', (event) => {
      this._closeDrawer(event, activeHamburger, nonActiveHamburger, navigationBar);
    });
  },

  _windowScroll(headerSticky) {
    window.scrollY > 10
      ? headerSticky.classList.add('enable-sticky')
      : headerSticky.classList.remove('enable-sticky');
  },

  _openDrawer(event, activeHamburger, nonActiveHamburger, headerSticky, navigationBar) {
    event.stopPropagation();
    activeHamburger.setAttribute('hidden', '');
    nonActiveHamburger.removeAttribute('hidden');
    headerSticky.classList.add('enable-sticky');
    navigationBar.style.display = 'block';
  },

  _closeDrawer(event, activeHamburger, nonActiveHamburger, navigationBar) {
    event.stopPropagation();
    activeHamburger.removeAttribute('hidden');
    nonActiveHamburger.setAttribute('hidden', '');
    navigationBar.style.display = 'none';
  },
};

export default DrawerInitiator;
