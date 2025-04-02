import { Component, Input } from '@angular/core';
import { CryptoPrice } from '../../interface/cryptoprice-interface';

@Component({
  selector: 'app-crypto-price-list',
  standalone: false,
  templateUrl: './crypto-price-list.component.html',
  styleUrl: './crypto-price-list.component.css'
})
export class CryptoPriceListComponent {
  @Input()
  AllCryptoPrice : CryptoPrice[] = [];
}
