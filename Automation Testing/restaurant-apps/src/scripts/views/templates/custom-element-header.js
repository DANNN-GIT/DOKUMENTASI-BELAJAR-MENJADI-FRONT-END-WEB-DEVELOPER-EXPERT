class customElementHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header id="header">
        <div class="header-brand">
          <h1>
            <span>Resto</span>.In
            <span>Ajah</span>!
          </h1>
          <button id="active-hamburger" tabindex="0">☰</button>
          <button id="nonactive-hamburger" tabindex="0" hidden>☰</button>
        </div>
        <nav id="navbar">
          <ul>
            <li><a href="#/home" tabindex="0">Home</a></li>
            <li><a href="#/best-restaurant" tabindex="0">Best Restaurant</a></li>
            <li><a href="#/favorite" tabindex="0">Favorite</a></li>
            <li>
              <a href="https://bit.ly/3LvoqPL" target="_blank" tabindex="0">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-app-bar', customElementHeader);
