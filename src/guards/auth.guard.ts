// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })


// @Injectable({ providedIn: 'root' }) // Consider provider scope

// export const authGuard: CanActivateFn = (route, state) => {

//   mapToCanActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | boolean | UrlTree {
//     // Replace with your actual authentication logic
//     const isAuthenticated = /* Your authentication logic here */;

//     if (isAuthenticated) {
//       return true; // Allow access if authenticated
//     } else {
//       // Redirect to login or handle unauthorized access
//       return this.router.createUrlTree(['/login']); // Replace with your login path
//     }
//   }
// }
// function constructor(private: any, router: any, Router: typeof Router) {
//   throw new Error('Function not implemented.');
// }

