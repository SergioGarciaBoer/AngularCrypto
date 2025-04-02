import { Component, Input } from '@angular/core';
import { CryptoPrice } from '../../interface/cryptoprice-interface';

@Component({
  selector: 'app-crypto-price-card',
  standalone: false,
  templateUrl: './crypto-price-card.component.html',
  styleUrl: './crypto-price-card.component.css'
})
export class CryptoPriceCardComponent {
  @Input()
  cryptoPrice!:CryptoPrice;
}
