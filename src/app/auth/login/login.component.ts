import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { LoginCredentials } from '../../model/LoginCredentials'
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";


  constructor(private router: Router, public loginService: LoginService) {
  }

  ngOnInit() {

  }




  onSubmit(): void {
    console.log(this.email);
    console.log(this.password)

    const loginCredentials: LoginCredentials = {
      email: this.email,
      password: this.password
    };


    this.loginService.setLoginData(loginCredentials); // Call service method
    console.log('Login credentials sent to service:', loginCredentials); // Optional for debugging

    this.loginService.submitData().subscribe(
      response => {
      console.log('Data submitted successfully:', response);


        window.alert("Login Succesfull..!😄 ")
        this.router.navigate(['app', 'home'])
      },
      error => {
        console.error('Error During Login:', error.error.message);
        alert(error.error.message)
      }
    );
  }


  forgetPassword(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth', 'forget-password'])
  }


  signup(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth', 'signup'])
  }
}
