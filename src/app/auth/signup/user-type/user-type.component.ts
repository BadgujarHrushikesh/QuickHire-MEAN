import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-type',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-type.component.html',
  styleUrl: './user-type.component.css'
})
export class UserTypeComponent {
  public selectedUserType: string = '#'
  public selectedState: string = '#'
  

  // constructor() {
  //   console.log(this.selectedUserType);
  // }

  onUserTypeChange(value: string) {
    console.log(value);
}
  onUserStateChange(value: string) {
    console.log(value);
}



}


