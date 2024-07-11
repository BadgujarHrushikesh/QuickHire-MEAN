// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private userloginData: any = {};
//   public isLogin: boolean = false;


//   private LoginURL = 'http://localhost:8000/api/auth/login'


//   constructor(private http: HttpClient) { }


//   setLoginData(data: any): void {
//     this.userloginData = data;
//   }


//   getLoginData(): any {
//     return this.userloginData;
//   }

//   setAppLogin(data: any): void {
//     this.isLogin = data
//   }

//   getAppLogin(): any {
//     return this.isLogin;
//   }



//   submitData(): Observable<any> {
//     console.log("Login Data : ", this.userloginData);
//     return this.http.post(this.LoginURL, this.userloginData);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userloginData: any = {};
  private LoginURL = 'http://localhost:8000/api/auth/login';

  private isLogin = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.isLogin.asObservable();

  constructor(private http: HttpClient) { }

  setLoginData(data: any): void {
    this.userloginData = data;
  }

  getLoginData(): any {
    return this.userloginData;
  }

  setAppLogin(status: boolean): void {
    this.isLogin.next(status);
  }

  getAppLogin(): boolean {
    return this.isLogin.value;
  }


  // submitData(): Observable<any> {
  //   console.log("Login Data:", this.userloginData);
  //   return this.http.post(this.LoginURL, this.userloginData);
  // }


  submitData(email: string, password: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post<any>(this.LoginURL, body, {
      headers: headers,
      observe: 'response',// To get the full response including headers
      withCredentials: true
    });
  }
}
