import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../../database/services/usario.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email = '';
  senha = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.usuarioService.validarLogin(this.email, this.senha).subscribe(usuario => {
      if (usuario) {
        alert('Login bem-sucedido!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('E-mail ou senha inválidos!');
      }
    });
  }
}
