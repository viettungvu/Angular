import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthPayload } from './AuthPayLoad';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  authenticate(email:string, password:string):Observable<AuthPayload> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
    const reqBodyPayload = { email, password, returnSecureToken: true };
    return this._http.post<AuthPayload>(url, reqBodyPayload);
  }
}
