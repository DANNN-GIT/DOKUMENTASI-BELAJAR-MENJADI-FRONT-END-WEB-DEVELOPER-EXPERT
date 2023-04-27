import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import { restaurants } from '../DATA.json';

const activeHamburger = document.getElementById('active-hamburger');
const nonActiveHamburger = document.getElementById('nonactive-hamburger');
const headerSticky = document.getElementById('header');
const navigationBar = document.getElementById('navbar');
const firstContent = document.querySelector('.first-content');
const fullRestoran = document.querySelector('.get-full-restoran');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerSticky.classList.add("enable-sticky");
  } else {
    headerSticky.classList.remove("enable-sticky");
  }
})
activeHamburger.addEventListener('click', () => {
  navigationBar.style.display = 'block';
  activeHamburger.setAttribute('hidden', '');
  nonActiveHamburger.removeAttribute('hidden');
})
nonActiveHamburger.addEventListener('click', () => {
  navigationBar.style.display = 'none';
  activeHamburger.removeAttribute('hidden');
  nonActiveHamburger.setAttribute('hidden', '');
})

for (let index = 0; index < 3; index++) {
  firstContent.innerHTML += `
    <article class="resto-item" tabindex="0">
      <section class="header-item">
        <label>Rating ${restaurants[index].rating}</label>
        <img src="${restaurants[index].pictureId}" alt="${restaurants[index].name}">
      </section>
      <section class="content-item">
        <h3 style="text-align: center;">${restaurants[index].name}</h3>
      </section>
    </article>
  `;
}
restaurants.forEach(restoList => {
  fullRestoran.innerHTML += `
    <article class="resto-item" tabindex="0">
      <section class="header-item">
        <label>${restoList.city}</label>
        <img src="${restoList.pictureId}" alt="${restoList.name}">
      </section>
      <section class="content-item">
        <h3>${restoList.name}</h3>
        <strong>Rating ${restoList.rating}</strong>
        <p>${restoList.description}</p>
      </section>
    </article>
  `;
});