import { LitElement, html, css } from "lit";

export class CoinListItem extends LitElement {
  static get properties() {
    return {
      coin: { type: String }
    }
  }

  static get styles() {
    return css`
      li {
        font-size: 2rem;
      }
      li:hover {
        background-color: yellow;
      }
    `;
  }

  render() {
    return html`
      <li @click=${this.clicked}>${this.coin}</li>
    `;
  }

  clicked() {
    console.log(this.coin);
  }
}

customElements.define('coin-list-item', CoinListItem);
