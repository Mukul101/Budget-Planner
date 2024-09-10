import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config';
import { Observable } from 'rxjs';

interface LoginResponse {
  message: string,
  token:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private http: HttpClient) { }
 

  login(email:string,password:string) : Observable <LoginResponse>
  {
   return this.http.post<LoginResponse>(AppConfig.baseApiUrl + "/login" , {email,password} )
  }

  setToken(token:string) {
    sessionStorage.setItem("token",token);
  }
  getToken(){
    return sessionStorage.getItem("token");
  }


}
