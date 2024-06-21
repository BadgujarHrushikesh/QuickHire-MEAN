import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isLogin: Boolean = false;
  // public isLogin: Boolean = true;

  public userId: Number = 123 // this now only for defining route came from backend with cookies when login will implement


  constructor(private router: Router) { }

  // enable both time when user login or not login

  login(): void {
    this.router.navigate(['auth', 'login'])
  }

  signup(): void {
    this.router.navigate(['auth', 'signup'])
  }

  home(event: Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'home'])
  }

  jobs(event: Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'jobs'])
  }
  about(event: Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'about-us'])
  }
  contact(event: Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'contact-us'])
  }


  // My account only enable when user will logged in
  profile(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', this.userId, 'profile'])

  }
  setting(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', this.userId, 'setting'])

  }
  myjobs(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', this.userId, 'my-jobs'])

  }
  signout(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', this.userId, 'signout'])
    // the logic about cookie expiration will came here or remove seecion or local storage 
  }

}
