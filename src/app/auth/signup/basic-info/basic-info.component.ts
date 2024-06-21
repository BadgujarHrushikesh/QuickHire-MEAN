import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {


  constructor(private router:Router){}

  userType(){
    // event.preventDefault()
    this.router.navigate(['auth','signup','user-type'])

  }
}
