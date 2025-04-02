
import { Injectable } from '@angular/core';


const url: string = 'https://api.coingecko.com/api/v3/search?query=bitcoin';

@Injectable({
  providedIn: 'root'
})
export class CryptoServiceService {

  /*constructor(private http: HttpClient) { 

  }

  public getCrypto():Observable<CryptoRes>{
    return this.http.get<CryptoRes>(url);
  }*/

}
