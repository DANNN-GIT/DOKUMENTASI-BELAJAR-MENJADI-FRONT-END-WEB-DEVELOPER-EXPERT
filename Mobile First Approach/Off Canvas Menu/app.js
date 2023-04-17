const hamburgerButton = document.getElementById('hamburger');
const drawerElement = document.getElementById('drawer');

hamburgerButton.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
})
document.querySelector('main').addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})