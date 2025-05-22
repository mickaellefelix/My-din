import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, WelcomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}


