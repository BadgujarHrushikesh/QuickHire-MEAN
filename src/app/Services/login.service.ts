import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userloginData: any = {};


  private LoginURL = 'http://localhost:8000/api/auth/login'


  constructor(private http: HttpClient) { }


  setLoginData(data: any): void {
    this.userloginData = data;
  }

  getLoginData(): any {
    return this.userloginData;
  }

  submitData(): Observable<any> {
    console.log("Login Data : ", this.userloginData);
    return this.http.post(this.LoginURL, this.userloginData);
  }
}
