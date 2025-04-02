import { Component, Input } from '@angular/core';
import { Crypto } from '../../interface/crypto-interface';

@Component({
  selector: 'app-cryptos-list',
  standalone: false,
  templateUrl: './cryptos-list.component.html',
  styleUrl: './cryptos-list.component.css'
})
export class CryptosListComponent {
  @Input()
  cryptos : Crypto[] = [];
}
