import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public ButtonPriceShow() {
    const cryptosInfo = document.getElementById('cryptos-info');
    const cryptoPrice = document.getElementById('cryptos-price')
    if (cryptosInfo) {
      cryptosInfo.style.display = 'none';
    }
    if(cryptoPrice){
      cryptoPrice.style.display = 'block';
    }
  }

  public ButtonInfoShow() {
    const cryptosInfo = document.getElementById('cryptos-info');
    const cryptoPrice = document.getElementById('cryptos-price')
    if (cryptosInfo) {
      cryptosInfo.style.display = 'block';
    }
    if(cryptoPrice){
      cryptoPrice.style.display = 'none';
    }
  }
  
  
}
