import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = true;

  constructor() {
  }

  login() {
    return this.isLogin = true;
  }

  logout() {
    return this.isLogin = false;
  }

  isAuthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => resolve(this.isLogin), 800);
    });
    return promise;
  }

}
