class customElementHeroBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-image">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.webp">
          <img class="lazyload" data-src="./images/heros/hero-image_4-large.webp" alt="Featured Image">
        </picture>
        <article class="hero-content">
          <h2>Solusi Tepat Mencari Restoran Terbaik di Indonesia</h2>
          <p>Resto.In Ajah adalah aplikasi penyedia daftar restoran terbaik di Indonesia yang memberikan kemudahan bagi pengguna untuk menemukan dan memesan makanan dari berbagai restoran di seluruh Indonesia dengan cepat, mudah, dan juga aman.</p>
        </article>
      </div>
    `;
  }
}
customElements.define('hero-banner-image', customElementHeroBanner);
