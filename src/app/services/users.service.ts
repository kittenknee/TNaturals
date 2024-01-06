import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  private credentialsURL = "http://localhost:3000/credentials";
  private userDetailsURL = "http://localhost:3000/user_details";
  private inventoryURL = "http://localhost:3000/inventory";
  private transactionsURL = "http://localhost:3000/transactions";
  private adminOrdersURL = "http://localhost:3000/admin_orders";

  // Registration services
    // Credentials Register:
    addUserCreds(userCred: any):Observable<any>{
      return this._http.post(this.userDetailsURL, userCred)
    }
    
    // User Details Register

  // Sign In services

    // 


}
