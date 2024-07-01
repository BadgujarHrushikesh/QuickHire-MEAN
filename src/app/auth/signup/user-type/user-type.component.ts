import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf, NgFor, CommonModule } from '@angular/common';
import { SignupService } from '../../../Services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-type',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, NgFor, CommonModule],
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  userTypes: string[] = ['Job Hunter', 'Employer', 'Company'];
  userType: string = '';
  selectedState: string = '';
  user_type_info!: FormGroup;
  user_basic_data: any = {}

  constructor(private fb: FormBuilder, public signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
    this.user_type_info = this.fb.group({
      userType: ['', Validators.required],
    });

    this.user_basic_data = this.signupService.getUserBasicData()
    console.log("data From page 1 through services : ", this.user_basic_data);

  }

  onUserTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.userType = selectElement.value;
    this.updateValidation();
  }

  onUserStateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedState = selectElement.value;
  }

  updateValidation(): void {
    if (this.userType === 'Job Hunter') {
      this.addJobHunterControls();
    } else {
      this.removeJobHunterControls();
    }

    if (this.userType === 'Employer') {
      this.addEmployerControls();
    } else {
      this.removeEmployerControls();
    }

    if (this.userType === 'Company') {
      this.addCompanyControls();
    } else {
      this.removeCompanyControls();
    }

    this.updateFormControlValidity();
  }

  addJobHunterControls(): void {
    this.user_type_info.addControl('workExperience', new FormControl('', Validators.required));
    this.user_type_info.addControl('jobType', new FormControl('', Validators.required));
    this.user_type_info.addControl('state', new FormControl('', Validators.required));
    this.user_type_info.addControl('city', new FormControl('', Validators.required,));
  }

  removeJobHunterControls(): void {
    this.user_type_info.removeControl('workExperience');
    this.user_type_info.removeControl('jobType');
    this.user_type_info.removeControl('state');
    this.user_type_info.removeControl('city');
  }

  addEmployerControls(): void {
    this.user_type_info.addControl('designation', new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]));
    this.user_type_info.addControl('department', new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]));
    this.user_type_info.addControl('company', new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]));
  }

  removeEmployerControls(): void {
    this.user_type_info.removeControl('designation');
    this.user_type_info.removeControl('department');
    this.user_type_info.removeControl('company');
  }



  addCompanyControls(): void {
    this.user_type_info.addControl('CIN', new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5}$/)]));
    // CIN is 21 Digit Alphanumeric code , replace 5 to 21 for production level
    this.user_type_info.addControl('businessType', new FormControl('', Validators.required));
    this.user_type_info.addControl('noOfEmployees', new FormControl('', Validators.required));
    this.user_type_info.addControl('companyWebsite', new FormControl('', [Validators.required, Validators.pattern(/^(?:https?:\/\/(?:www\.)?([a-zA-Z0-9-]+)\.(?:[a-zA-Z]{2,})(?:\/[^\s]*)?)$|^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/)]));
    // validation for Linkdin or Website
  }

  removeCompanyControls(): void {
    this.user_type_info.removeControl('CIN');
    this.user_type_info.removeControl('businessType');
    this.user_type_info.removeControl('noOfEmployees');
    this.user_type_info.removeControl('companyWebsite');
  }

  updateFormControlValidity(): void {
    for (const control in this.user_type_info.controls) {
      this.user_type_info.controls[control].updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.user_type_info.valid) {
      console.log(this.user_type_info.value);

      this.signupService.setUserTypeData(this.user_type_info);
      this.signupService.onSubmit_UserTypeInfo().subscribe(
        response => {
          console.log('Data submitted successfully:', response);
          window.alert("Your Account has Been Successfuly Created, Please Login..!😄 ")
          this.router.navigate(['auth', 'login'])
        },
        error => {
          console.error('Error submitting data:', error.error.message);
          alert(error.error.message)
        }
      );


    } else {
      console.log('Form is invalid');
      window.alert("All fields are required")
    }
  }
}
