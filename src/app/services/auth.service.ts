import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.url_api + 'auth/login', data);
  }

  logout() {
    return this.isLogin = false;
  }

  getUser() {
    return localStorage.getItem('userProfile')
  }

}
