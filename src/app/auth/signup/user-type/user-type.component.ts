import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-type.component.html',
  styleUrl: './user-type.component.css'
})
export class UserTypeComponent {
  public selectedUserType: string = ''
  

  constructor() {
    console.log(this.selectedUserType);
  }

}



