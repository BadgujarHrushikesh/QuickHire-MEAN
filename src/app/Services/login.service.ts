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
import { HttpClient } from '@angular/common/http';

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

  // updateLoginStatus(status: boolean): void {
  //   this.isLogin.next(status);
  // }




   // const token = localStorage.getItem('jwtToken');

  //   makeAuthenticatedRequest = async (url, data) => {
  //   try {
  //     const response = await axios.post(url, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     // Handle errors appropriately, e.g., redirect to login if unauthorized
  //   }
  // };





  submitData(): Observable<any> {
    console.log("Login Data:", this.userloginData);
    return this.http.post(this.LoginURL, this.userloginData);
  }
}
