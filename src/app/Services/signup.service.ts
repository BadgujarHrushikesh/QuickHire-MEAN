import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'node:console';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userBasicData: any = {};
  private userTypeData: any = {};
  private userProfile: any = {}

  // private ok = true

  private signupUrl = 'http://localhost:8000/api/auth/signUp'
  private createProfile = 'http://localhost:8000/api/my-account/profile'

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

  getProfile() : any {
    const {name,email} = this.getUserBasicData()
    const userTypeDataValues = this.userTypeData.value;
    const createProfile = {
      name,
      email,
      ...userTypeDataValues,
    };
  
    return createProfile;
  }



    submitData(): Observable<any> {
      const userBasicDataValues = this.userBasicData;
      console.log("userBasicDataValues aaaa = ", userBasicDataValues);
      return this.http.post(this.signupUrl, userBasicDataValues);
    }


  onSubmit_UserTypeInfo(): Observable<any> {
    const userTypeDataValues = this.getProfile();
    console.log("SEND TO BACKEND PROFILE : ",userTypeDataValues);
    
    return this.http.post(this.createProfile, userTypeDataValues);
  }
}
