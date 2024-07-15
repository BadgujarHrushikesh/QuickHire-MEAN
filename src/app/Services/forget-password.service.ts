import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private forgetPasswordEmailCheckURL = 'http://localhost:8000/api/auth/forgotPassword';
  private email: String = "";

  constructor(private http: HttpClient) { }

  setEmailToCheck(data: string): void {
    this.email = data;
    
    
  }

  getLoginData(): any {
    return this.email;
  }


  submitEmail(email: string): Observable<any> {
    return this.http.post(this.forgetPasswordEmailCheckURL,{email}) 
  }
}
