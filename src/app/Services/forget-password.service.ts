import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'node:console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private token: String = "";
  private forgetPasswordEmailCheckURL = 'http://localhost:8000/api/auth/forgotPassword';
  private changePasswordURL = 'http://localhost:8000/api/auth/resetpassword/' + this.token;
  private email: String = "";

  constructor(private http: HttpClient) { }

  setEmailToCheck(data: string): void {
    this.email = data;


  }
  getEmailToCheck(): any {
    return this.email;
  }

  setPasswordToken(data: string): void {
    this.token = data;
  }

  submitEmail(email: string): Observable<any> {
    return this.http.post(this.forgetPasswordEmailCheckURL, { email })
  }

  submitNewPassword(password: string, confirmPassword: string): Observable<any> {

    return this.http.post(this.changePasswordURL, { password, confirmPassword })
  }

}
