import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public userType: String = "Job Hunter"

  constructor() { }

}
