import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GanhoService } from '../../../../database/services/ganho.service';
import { IGanho } from '../../../../database/models/ganho.model';

@Component({
  selector: 'app-card-cadastro-ganho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-cadastro-ganho.component.html',
  styleUrl: './card-cadastro-ganho.component.css'
})
export class CardCadastroGanhoComponent {
  ganho: IGanho = {
    categoria: '',
    data: '',
    valor: 0,
    descricao: ''
  };

  constructor(private ganhoService: GanhoService, private router: Router) {}

  cadastrar() {
    this.ganhoService.cadastrarGanho(this.ganho).subscribe(() => {
      alert('Ganho cadastrado com sucesso!');
      this.router.navigate(['/dashboard']);
    });
  }

  limpar() {
    this.ganho = { categoria: '', data: '', valor: 0, descricao: '' };
  }
}
