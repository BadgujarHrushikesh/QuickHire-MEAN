import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupUserinfo } from '../../../model/signup-userinfo';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {
public Name : String = ""
public Email : String = ""
public Password : String = ""
public ConfirmPassword : String = ""



  constructor(private router:Router){}

  userType(){
    // event.preventDefault()
    this.router.navigate(['auth','signup','user-info'])
  }



}
