import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagesComponent } from './pages/pages.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { MyAccountComponent } from './pages/My-account/my-account.component';
import { ProfileComponent } from './pages/My-account/profile/profile.component';
import { SettingComponent } from './pages/My-account/setting/setting.component';
import { MyJobsComponent } from './pages/My-account/my-jobs/my-jobs.component';
import { CreateEditProfileComponent } from './pages/My-account/create-edit-profile/create-edit-profile.component';
import { BasicInfoComponent } from './auth/signup/basic-info/basic-info.component';
import { UserTypeComponent } from './auth/signup/user-type/user-type.component';
import { AskEmailComponent } from './auth/forget-password/ask-email/ask-email.component';
import { ResetPasswordComponent } from './auth/forget-password/reset-password/reset-password.component';


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
            component: SignupComponent,
            children: [
                {
                    path: "basic-info",
                    component: BasicInfoComponent
                },
                {
                    path: 'user-info',
                    component: UserTypeComponent
                },
                {
                    path: '**',
                    redirectTo: "basic-info"
                }]
        },
        {
            path: 'forget-password',
            component: ForgetPasswordComponent,
            children: 
            [
                {
                    path: "askEmail",
                    component: AskEmailComponent
                },
                {
                    path: 'resetPassword',
                    component: ResetPasswordComponent
                },{
                    path: '**',
                    redirectTo: "askEmail"
                }
            ]
        },
        {
            path: '**',
            redirectTo: 'login'
        }]
    },
    {
        path: 'my-account',
        component: MyAccountComponent,
        children: [{
            path: 'profile/:userId',
            component: ProfileComponent,
            data: { ngSkipHydration: true }
        }, {
            path: 'setting/:userId',
            component: SettingComponent
        }, {
            path: 'my-jobs/:userId',
            component: MyJobsComponent
        }, {
            path: 'edit-profile/:userId',
            component: CreateEditProfileComponent
        }
        ]
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
            component: AboutComponent
        },
        {
            path: 'contact-us',
            component: ContactComponent
        },
        {
            path: 'jobs',
            component: JobsComponent
        },
        {
            path: '**',
            redirectTo: 'home'
        }]
    }, {
        path: '**',
        redirectTo: 'app'
    }



];
