export class CryptoCoinService {
  constructor() {}

  getCoins() {
    return fetch('/cryptocoins.config.json')
      .then((response) => response.json())
      .then((json) => json.coins);
  }
}