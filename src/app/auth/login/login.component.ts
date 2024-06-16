import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private router : Router){}


  forgetPassword(event: Event){
    event.preventDefault();
    this.router.navigate(['auth','forget-password'])
  }


  signup(event: Event){
    event.preventDefault();
    this.router.navigate(['auth','signup'])
  }
}
