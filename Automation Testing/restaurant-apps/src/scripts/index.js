import 'regenerator-runtime';
import '../styles/main.css';
import customElementHeader from './views/templates/custom-element-header';
import customElementHeroBanner from './views/templates/custom-element-banner';
import customElementContent from './views/templates/custome-element-content';
import customElementFooter from './views/templates/custom-element-footer';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  activeHamburger: document.getElementById('active-hamburger'),
  nonActiveHamburger: document.getElementById('nonactive-hamburger'),
  headerSticky: document.getElementById('header'),
  navigationBar: document.getElementById('navbar'),
  content: document.getElementById('main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.getElementById('skipToContent').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('main').focus();
});
