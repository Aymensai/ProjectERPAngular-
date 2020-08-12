import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(data)
  {
    return this.http.post(this.baseUrl + 'login', data);
  }

  register(data){
    return this.http.post(this.baseUrl + 'register', data);
  }
  requestReset(data) {
    return this.http.post(this.baseUrl + 'resetPassword', data);
  }

  newPassword(data) {
    return this.http.post( this.baseUrl + 'newPassword',  data);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
   if (token === null || token === undefined)
   {
        return false;
   }

   const isExpiredToken = this.jwtHelper.isTokenExpired(token)
   if (isExpiredToken)
   {
     localStorage.clear();
   }
  
    return !isExpiredToken;
  }

  getToken() {
   return localStorage.getItem('token');
  }

  
}


