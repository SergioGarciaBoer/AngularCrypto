import { Component } from '@angular/core';
import { Crypto } from '../../interface/crypto-interface';
import { CryptoPrice } from '../../interface/cryptoprice-interface';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  cryptos : Crypto[] = [];
  allCryptos : Crypto[] = [];
  url : string = 'https://api.coingecko.com/api/v3/search?query=bitcoin';

  cryptoPrice : CryptoPrice[] = [];
  priceURL : string = 'https://api.binance.com/api/v3/ticker/price';

  ngOnInit(){
    fetch(this.url)
    .then((response) => response.json())
    .then((response) => {
      this.cryptos = response.coins;
    });

    fetch(this.priceURL)
    .then((response) => response.json())
    .then((response) => {
      this.cryptoPrice = response;
    })
  }
}
