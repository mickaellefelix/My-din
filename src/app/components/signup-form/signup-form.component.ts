import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../../database/services/usuario.service';
import { IUsuario } from '../../../../database/models/usuario.model';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  usuario: Partial<IUsuario> = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar() {
    if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
      this.usuarioService.getUsuarioPorEmail(this.usuario.email).subscribe(usuarioExistente => {
        if (usuarioExistente) {
          alert('Este e-mail já está cadastrado!');
        } else {
          this.usuarioService.cadastrarUsuario(this.usuario as IUsuario).subscribe(() => {
            alert('Cadastro realizado com sucesso!');
            this.router.navigate(['/login']);
          });
        }
      });
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
