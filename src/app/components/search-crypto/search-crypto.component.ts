import { Component } from '@angular/core';

@Component({
  selector: 'app-search-crypto',
  standalone: false,
  templateUrl: './search-crypto.component.html',
  styleUrl: './search-crypto.component.css'
})
export class SearchCryptoComponent {
  public goToCryptoPrice(){
    const searchInput = document.getElementById('search') as HTMLInputElement | null;
    if(searchInput){
      console.log(searchInput.value);
      window.location.hash = searchInput.value;
    }
  }
}
