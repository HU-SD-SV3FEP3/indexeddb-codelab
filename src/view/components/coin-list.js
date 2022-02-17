import { LitElement, html, css } from "lit";
import { CryptoCoinService } from "../../service/cryptocoin.service.js";

export class CoinList extends LitElement {
  static get properties() {
    return {
      coins: { type: Array }
    }
  }

  static get styles() {
    return css`
      ul {
        list-style-type: none;
      }
    `;
  }

  constructor() {
    super();
    this.cryptoCoinService = new CryptoCoinService();
    this.coins = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.cryptoCoinService.getCoins()
      .then((coins) => {
        this.coins = [...coins];
      });
  }

  render() {
    return html`
    <h1>Crytos</h1>
      <ul>
        ${this.coins.map((coin, index) => html`
          <coin-list-item coin="${coin}"></coin-list-item>
        `)}
      </ul>
    `;
  }
}

customElements.define('coin-list', CoinList);
