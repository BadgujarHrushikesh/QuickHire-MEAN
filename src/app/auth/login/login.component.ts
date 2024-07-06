import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { LoginCredentials } from '../../model/LoginCredentials'

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
  public LoginResponce: any;
  public userType!: string;
  public jwtToken:string= "";


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
        this.LoginResponce = response;

        this.loginService.setAppLogin(response.success)
        // this.loginService.getAppLogin()



        // Check if the JWT token is included in the response headers
      //  this.jwtToken = response.headers.get('Set-Cookie');
      //   if (this.jwtToken) {
      //     // Store the JWT token in session storage
      //     sessionStorage.setItem('auth_token', this.jwtToken);
      //   } else {
      //     console.warn('No JWT token found in response headers');
      //   }

      


        this.userType = this.LoginResponce.data.userType;
        console.log('Data submitted successfully:', response.success);
        window.alert("Login Succesfull..!😄 ")

        sessionStorage.setItem('loginResponse', JSON.stringify(response));
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
