import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { LoginCredentials } from '../../model/LoginCredentials'
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

  
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public isLogin!: boolean;
  public jwtToken: string = "";

  public window: Window | null = null;


  constructor(
    private router: Router, 
    public loginService: LoginService,
    @Inject(PLATFORM_ID) private platformId: Object
   ) {

    window.onload = () => {
      const storedData = window.localStorage.getItem('isLogin');
      if (storedData) {
        this.isLogin = JSON.parse(storedData);
        console.log("From Local storage:", this.isLogin);
      }
    };
  }



  


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
    }
  }



  getDataFromStorage(key: string): any {

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

    this.loginService.submitData(this.email,this.password).subscribe(
      response => {
        window.localStorage.setItem('loginResponse', JSON.stringify(response.body));
        // window.localStorage.setItem('isLogin', JSON.stringify({ 'isLogin': response.success }));
        window.localStorage.setItem('isLogin', JSON.stringify({ isLogin: response.body.success }));

        // this.LoginResponce = response;

        // console.log('Data submitted successfully:', response.success);
        window.alert("Login Succesfull..!😄 ")

        // this.userType = sessionStorage.getItem(JSON.parse('loginResponse').success.value)

        // console.log("From session storage", this.userType);

        const a = localStorage.getItem('isLogin');
        if (a !== null) {
          const parsedObject = JSON.parse(a);
          console.log(typeof parsedObject.isLogin, 'Value of isLogin =', parsedObject.isLogin);
        } else {
          console.log('isLogin is null.');
        }
        
        // this.isLogin = response.success;
        this.loginService.setAppLogin(this.isLogin)



        // Extract and set cookie
        const setCookieHeader = response.headers.get('Set-Cookie');
        if (setCookieHeader) {
          // Parse the Set-Cookie header to get the token
          const tokenMatch = setCookieHeader.match(/token=([^;]+)/);
          if (tokenMatch) {
            const token = tokenMatch[1];
            // Set the cookie in document.cookie
            document.cookie = `token=${token}; max-age=86400; path=/; HttpOnly; Secure; SameSite=Strict`;
          }
        }


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
