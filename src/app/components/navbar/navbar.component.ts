import { NgIf } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean = false;
  public window: Window | null = null;

  constructor(
    private router: Router,
    public loginService: LoginService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
      this.checkLocalStorage();
    }

    // Subscribe to the login status changes
    this.loginService.currentLoginStatus.subscribe((status: boolean) => {
      this.isLogin = status; // Update your component state
    });
  }

  ngDoCheck() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkLocalStorage();
    }
  }

  checkLocalStorage(): void {
    if (this.window) {
      const storedData = this.window.localStorage.getItem('isLogin');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        this.isLogin = parsedData.isLogin;
        console.log("isLogin value:", this.isLogin);
      } else {
        this.isLogin = false;
      }
    }
  }

  login(): void {
    this.router.navigate(['auth', 'login']);
  }

  signup(): void {
    this.router.navigate(['auth', 'signup']);
  }

  home(event: Event): void {
    event.preventDefault();
    this.router.navigate(['app', 'home']);
  }

  jobs(event: Event): void {
    event.preventDefault();
    this.router.navigate(['app', 'jobs']);
  }

  about(event: Event): void {
    event.preventDefault();
    this.router.navigate(['app', 'about-us']);
  }

  contact(event: Event): void {
    event.preventDefault();
    this.router.navigate(['app', 'contact-us']);
  }

  // My account only enable when user will logged in
  profile(event: Event): void {
    event.preventDefault();
    // Assuming userId is a property you will set when the user is logged in
    const userId = 123;
    this.router.navigate(['my-account', 'profile', userId]);
  }

  setting(event: Event): void {
    event.preventDefault();
    const userId = 123;
    this.router.navigate(['my-account', 'setting', userId]);
  }

  myjobs(event: Event): void {
    event.preventDefault();
    const userId = 123;
    this.router.navigate(['my-account', 'my-jobs', userId]);
  }

  signout(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior

    if (isPlatformBrowser(this.platformId)) {
      // Clear local storage, session storage, and cookies securely
      this.clearLocalStorage();
      this.clearSessionStorage();
      this.clearCookies();

      // Invalidate JWT token (if applicable)
      this.invalidateJwtToken();
    }
  }

  private clearLocalStorage(): void {
    localStorage.removeItem('isLogin'); // Replace with actual token key
    localStorage.removeItem('loginResponse'); // Replace with actual user data key
  }

  private clearSessionStorage(): void {
    sessionStorage.removeItem('auth_token'); // Replace with actual token key
  }

  private clearCookies(): void {
    // Use a secure method like `document.cookie` with appropriate expiration
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'; // Replace with actual token key
  }

  private invalidateJwtToken(): void {
    // If using a library like Angular JWT, call its invalidation method
    // Otherwise, perform token invalidation logic (e.g., blacklist on server)
  }
}
