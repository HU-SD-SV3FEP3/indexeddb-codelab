import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <coin-list></coin-list>
    `;
  }
}

customElements.define('home-page', HomePage);
