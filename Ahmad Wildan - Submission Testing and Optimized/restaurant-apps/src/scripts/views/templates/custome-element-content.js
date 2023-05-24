class customElementContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="main-content"></div>
    `;
  }
}
customElements.define('page-main-content', customElementContent);
