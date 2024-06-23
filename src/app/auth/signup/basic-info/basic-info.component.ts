import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

interface PasswordValidation {
  hasNumber: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasSymbol: boolean;
}

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
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

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.user_Basic_info = this.fb.group({
      id: [''],
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

  signup_basic_info_submit() {
    if (this.user_Basic_info.valid) {
      console.log('Step 1 completed ', this.user_Basic_info.value);
      this.router.navigate(['auth', 'signup', 'user-info']);
    }
  }


  signin(event:Event){
    event.preventDefault();
    this.router.navigate(['auth','signin'])
    
  }
}
