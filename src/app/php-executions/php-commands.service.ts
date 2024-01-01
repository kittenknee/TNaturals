import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhpCommandsService {

  private registerURL = "https://localhost:8000";
  
  constructor(private http: HttpClient) { }
  registerUser(regData: any):Observable<any>{
    return this.http.post(this.registerURL, regData);
  }


}
