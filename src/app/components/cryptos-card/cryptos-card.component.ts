import { Component, Input } from '@angular/core';
import { Crypto } from '../../interface/crypto-interface';

@Component({
  selector: 'app-cryptos-card',
  standalone: false,
  templateUrl: './cryptos-card.component.html',
  styleUrl: './cryptos-card.component.css'
})
export class CryptosCardComponent {
  @Input()
  crypto!:Crypto;
}
