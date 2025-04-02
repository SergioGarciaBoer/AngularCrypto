import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCryptoComponent } from '../components/search-crypto/search-crypto.component';
import { CryptosCardComponent } from '../components/cryptos-card/cryptos-card.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { CryptosListComponent } from '../components/cryptos-list/cryptos-list.component';
import { CryptoPriceCardComponent } from '../components/crypto-price-card/crypto-price-card.component';
import { CryptoPriceListComponent } from '../components/crypto-price-list/crypto-price-list.component';



@NgModule({
  declarations: [
    SearchCryptoComponent,
    CryptosCardComponent,
    CryptosListComponent,
    CryptoPriceCardComponent,
    CryptoPriceListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class CryptosModuleModule { }
