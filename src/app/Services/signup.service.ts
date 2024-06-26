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
    console.log("Row data Received  = ", data);

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


  // submitData(): Observable <any> {
  //   const mergedData = { ...this.userBasicData, ...this.userTypeData };
  //   console.log(this.userBasicData.value);
  //   console.log(this.userTypeData.value);

  //   console.log({mergedData});

  //   return this.http.post(this.signupUrl, mergedData);

  // }


  submitData(): Observable<any> {
    // Extract values from the form groups
    const userBasicDataValues = this.userBasicData;
    const userTypeDataValues = this.userTypeData.value;

    console.log("userBasicDataValues aaaa = ", userBasicDataValues);
    console.log("userTypeDataValues = ", userTypeDataValues);

    // Merge the extracted values
    const mergedData = { ...userBasicDataValues, ...userTypeDataValues };
    console.log("Merged Data :", mergedData);

    return this.http.post(this.signupUrl, mergedData);

  }
}
