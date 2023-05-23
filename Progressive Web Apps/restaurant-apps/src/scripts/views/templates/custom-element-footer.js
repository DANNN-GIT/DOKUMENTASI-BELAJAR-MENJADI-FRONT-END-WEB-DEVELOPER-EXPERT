class customElementFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer">
        <i>Copyright &copy; 2023 - Resto.In Ajah! Created by Ahmad Wildan</i>
      </footer>
    `;
  }
}
customElements.define('footer-app-bar', customElementFooter);
