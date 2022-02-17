import { LitElement, html, css } from "lit";

export class PageNotFound extends LitElement {
  render() {
    return html`
      De pagina die je zoekt bestaat niet.
    `;
  }
}

customElements.define('page-not-found', PageNotFound);