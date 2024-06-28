import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { SignupService } from '../../../Services/signup.service';
import { response } from 'express';
import { error } from 'console';

interface PasswordValidation {
  hasNumber: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasSymbol: boolean;
}

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  public user_Basic_info!: FormGroup;
  passwordValidation: PasswordValidation = {
    hasNumber: false,
    hasUpper: false,
    hasLower: false,
    hasSymbol: false
  };

  constructor(private router: Router, private fb: FormBuilder, private signupService: SignupService) { }

  ngOnInit(): void {
    this.user_Basic_info = this.fb.group({
      // id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^([^0-9]*)$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });

  }
  get password() {
    return this.user_Basic_info.get('password');
  }

  get confirmPassword() {
    return this.user_Basic_info.get('confirmPassword');
  }

  checkPasswordStrength(event: any) {
    const password = event.target.value;
    this.passwordValidation.hasNumber = /\d/.test(password);
    this.passwordValidation.hasUpper = /[A-Z]/.test(password);
    this.passwordValidation.hasLower = /[a-z]/.test(password);
    this.passwordValidation.hasSymbol = /[^\w\s]/.test(password);
  }

  passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }

    return null;
  }


  onSubmit(): void {
    if (this.user_Basic_info.valid) {
      console.log("Step 1 Completed");
      console.log(this.user_Basic_info.value);

      this.signupService.setUserBasicData(this.user_Basic_info.value)
      this.signupService.submitData().subscribe(
        response => {
          console.log('Data submitted successfully:', response);
          window.alert("Signup Suceesfull, Please Login..!😄 ")
          this.router.navigate(['auth', 'signup', 'user-info']);

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





  signin(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth', 'signin'])

  }
}
