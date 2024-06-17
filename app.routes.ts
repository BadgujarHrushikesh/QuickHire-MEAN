import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JobsComponent } from './pages/jobs/jobs.component';


import { AuthComponent } from './src/app/auth/auth.component';
import { LoginComponent } from './src/app/auth/login/login.component';
import { SignupComponent } from './src/app/auth/signup/signup.component';
import { ForgetPasswordComponent } from './src/app/auth/forget-password/forget-password.component';


export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [{
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        },
        {
            path: 'forget-password',
            component: ForgetPasswordComponent
        },
        {
            path: '**',
            redirectTo: 'login'
        }]
    },
    {
        path: 'app',
        component: PagesComponent,
        children: [{
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about-us',
            component:  AboutComponent
        },
        {
            path: 'contact-us',
            component: ContactComponent
        },
        {
            path: 'jobs',
            component:  JobsComponent
        },
        {
            path: '**',
            redirectTo: 'home'
        }]
    }



];
