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
  // public isLogin : Boolean = true;


  constructor(private router: Router) { }

  login(): void {
    this.router.navigate(['auth', 'login'])
  }

  signup(): void {
    this.router.navigate(['auth', 'signup'])
  }

  home(event:Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'home'])
  }

  jobs(event:Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'jobs'])
  }
  about(event:Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'about-us'])
  }
  contact(event:Event): void {
    event.preventDefault()
    this.router.navigate(['app', 'contact-us'])
  }


}
