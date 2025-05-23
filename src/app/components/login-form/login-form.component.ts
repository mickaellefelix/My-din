import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfiguracoesComponent } from '../../pages/configuracoes/configuracoes.component';

@Component({
  selector: 'app-login-form',
  imports: [RouterModule, ConfiguracoesComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
