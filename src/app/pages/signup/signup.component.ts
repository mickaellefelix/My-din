import { Component } from '@angular/core';
import { SignupFormComponent } from "../../components/signup-form/signup-form.component";
import { BackLoginComponent } from "../../components/back-login/back-login.component";

@Component({
  selector: 'app-signup',
  imports: [SignupFormComponent, BackLoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
