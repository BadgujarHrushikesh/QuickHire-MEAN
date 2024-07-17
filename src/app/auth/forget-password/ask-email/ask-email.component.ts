import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../../../Services/forget-password.service';


@Component({
  selector: 'app-ask-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ask-email.component.html',
  styleUrl: './ask-email.component.css'
})
export class AskEmailComponent {
  public email: string = "";
  public passwordToken: string = "";

  constructor(
    private router: Router,
    public passwordServices: ForgetPasswordService
  ) { }

  onSubmit(): void {
    console.log(this.email);

    this.passwordServices.setEmailToCheck(this.email)
    this.passwordServices.submitEmail(this.email).subscribe(
      response => {
        this.passwordToken = response.token;
        console.log(this.passwordToken);

        if (response.success) {
          this.router.navigate(['auth', 'forget-password', 'resetPassword'])
        } else{
          window.alert('Error During Login:' + response.message);

        }

      },
      error => {
        console.error('Error During Login:', error.message);
      }
    )

  }

}
