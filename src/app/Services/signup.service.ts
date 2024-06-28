import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userBasicData: any = {};
  private userTypeData: any = {}

  // private ok = true

  private signupUrl = 'http://localhost:8000/api/auth/signUp'
  // private signupUrl = 'http://localhost:4200/api/signup'

  constructor(private http: HttpClient) { }

  setUserBasicData(data: any): void {
    this.userBasicData = data;
    console.log("Data From page 1  = ", this.userBasicData);

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


  


  submitData(): Observable<any> {
   
    const userBasicDataValues = this.userBasicData;
    console.log("userBasicDataValues aaaa = ", userBasicDataValues);
    return this.http.post(this.signupUrl,userBasicDataValues );

  }


  onSubmit_UserTypeInfo():Observable<any>{
    const userTypeDataValues = this.userTypeData.value;
    return this.http.post(this.signupUrl,userTypeDataValues);
  }
}
