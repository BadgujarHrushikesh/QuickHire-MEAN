import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public isLogin: Boolean = false;
  // public isLogin: Boolean = true;

  public userId: Number = 123 // this now only for defining route came from backend with cookies when login will implement

  constructor(private router: Router, public loginService: LoginService) { }


  ngOnInit() {
    // Subscribe to the login status changes
    this.loginService.currentLoginStatus.subscribe((status: boolean) => {
      this.isLogin = status; // Update your component state
      // Perform any other actions based on the login status
    })
  }

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
    this.router.navigate(['my-account', 'profile', this.userId])

  }
  setting(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', 'setting', this.userId])

  }
  myjobs(event: Event): void {
    event.preventDefault()
    this.router.navigate(['my-account', 'my-jobs', this.userId])

  }
  // signout(event: Event): void {
  //   // event.preventDefault()
  //   // this.router.navigate(['my-account', 'signout', this.userId])
  //   // the logic about cookie expiration will came here or remove seecion or local storage 
  // }



  signout(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior

    // Clear local storage, session storage, and cookies securely
    this.clearLocalStorage();
    this.clearSessionStorage();
    this.clearCookies();

    // Invalidate JWT token (if applicable)
    this.invalidateJwtToken();
  }

  private clearLocalStorage(): void {
    localStorage.removeItem('auth_token'); // Replace with actual token key
    localStorage.removeItem('user_data');  // Replace with actual user data key
    // ... Remove other relevant keys
  }

  private clearSessionStorage(): void {
    sessionStorage.removeItem('auth_token'); // Replace with actual token key
    // ... Remove other relevant keys
  }

  private clearCookies(): void {
    // Use a secure method like `document.cookie` with appropriate expiration
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'; // Replace with actual token key
    // ... Clear other cookies securely
  }

  private invalidateJwtToken(): void {
    // If using a library like Angular JWT, call its invalidation method
    // ... (replace with appropriate library call)

    // Otherwise, perform token invalidation logic (e.g., blacklist on server)
    // ... (implement server-side invalidation logic)
  }


}
