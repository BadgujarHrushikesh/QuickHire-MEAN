import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userBasicData: any = {};
  private userTypeData: any = {}

  private ok = true

  private signupUrl = 'http://localhost:4200/api/signup'
  // private signupUrl = 'http://localhost:4200/api/signup'

  constructor(private http: HttpClient) { }

  setUserBasicData(data: any): void {
    this.userBasicData = data;
  }

  setUserTypeData(data: any): void {
    this.userTypeData = data;
  }

  getUserBasicData(): any {
    return this.userBasicData;
  }

  getUserTypeData(): any {
    return this.userTypeData;
  }


  submitData(): Observable <any> {
    const mergedData = { ...this.userBasicData, ...this.userTypeData };
    console.log(mergedData);
    
    return this.http.post(this.signupUrl, mergedData);
    


  }
}
